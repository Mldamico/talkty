using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<Result<PagedList<ActivityDto>>>
    {
        public PagingParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<ActivityDto>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _context = context;
            _mapper = mapper;
            _userAccessor = userAccessor;
        }

        public async Task<Result<PagedList<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Activities
                .OrderBy(d => d.Date)
                // .Include(a => a.Attendees)
                // .ThenInclude(u => u.AppUser)
                .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider,
                    new {currentUsername = _userAccessor.GetUsername()})
                .AsQueryable();
            // var activitiesToReturn = _mapper.Map<List<ActivityDto>>(activities);
            return Result<PagedList<ActivityDto>>.Success(
                await PagedList<ActivityDto>.CreateAsync(query, request.Params.PageNumber, request.Params.PageSize));
        }
    }
}