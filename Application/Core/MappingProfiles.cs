using API.DTOs;
using Application.Activities;
using Application.Comments;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<Activity, ActivityDto>()
            .ForMember(d => d.HostUsername,
                options => options
                    .MapFrom(source => source.Attendees.FirstOrDefault(x => x.IsHost).AppUser.UserName));
        CreateMap<ActivityAttendee, AttendeeDto>()
            .ForMember(d => d.DisplayName,
                o => o.MapFrom(s => s.AppUser.DisplayName))
            .ForMember(d => d.Username,
                o => o.MapFrom(s => s.AppUser.UserName))
            .ForMember(d => d.Bio,
                o => o.MapFrom(s => s.AppUser.Bio))
            .ForMember(x => x.Image, opt => opt.MapFrom(a => a.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url));
        CreateMap<AppUser, Profiles.Profile>()
            .ForMember(x => x.Image, opt => opt.MapFrom(a => a.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.Followers.Count))
            .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.Followings.Count));

        CreateMap<Comment, CommentDto>()
            .ForMember(d => d.DisplayName,
                o => o.MapFrom(s => s.Author.DisplayName))
            .ForMember(d => d.Username,
                o => o.MapFrom(s => s.Author.UserName))
            .ForMember(x => x.Image, opt => opt.MapFrom(a => a.Author.Photos.FirstOrDefault(x => x.IsMain).Url));
    }
}