import BaseDemuxer from './base-demuxer';
declare class TSDemuxer extends BaseDemuxer {
    private readonly TAG;
    private config_;
    private ts_packet_size_;
    private sync_offset_;
    private first_parse_;
    private media_info_;
    private timescale_;
    private duration_;
    private pat_;
    private current_program_;
    private current_pmt_pid_;
    private pmt_;
    private program_pmt_map_;
    private pes_slice_queues_;
    private section_slice_queues_;
    private video_metadata_;
    private audio_metadata_;
    private last_pcr_;
    private last_pcr_base_;
    private timestamp_offset_;
    private audio_last_sample_pts_;
    private aac_last_incomplete_data_;
    private has_video_;
    private has_audio_;
    private video_init_segment_dispatched_;
    private audio_init_segment_dispatched_;
    private video_metadata_changed_;
    private audio_metadata_changed_;
    private video_keyframe_seen_after_init_;
    private stashed_audio_before_video_init_;
    private _last_dispatch_block_reason_;
    private video_init_dispatch_time_;
    private active_audio_pid_;
    private loas_previous_frame;
    private video_track_;
    private audio_track_;
    constructor(probe_data: any, config: any);
    destroy(): void;
    static probe(buffer: ArrayBuffer): {
        needMoreData: boolean;
        match?: undefined;
        consumed?: undefined;
        ts_packet_size?: undefined;
        sync_offset?: undefined;
    } | {
        match: boolean;
        needMoreData?: undefined;
        consumed?: undefined;
        ts_packet_size?: undefined;
        sync_offset?: undefined;
    } | {
        match: boolean;
        consumed: number;
        ts_packet_size: number;
        sync_offset: number;
        needMoreData?: undefined;
    };
    bindDataSource(loader: any): this;
    resetMediaInfo(): void;
    /**
     * Switch to a different audio PID discovered in the PMT.
     * Call with a pid from onTracksUpdated audioTracks, or 0 to revert to default.
     * Resets audio init state so the new stream is initialised cleanly.
     */
    selectAudioPid(pid: number): void;
    /** Returns the current PMT track lists (same data as onTracksUpdated). */
    getAvailableTracks(): {
        audioTracks: {
            pid: number;
            codec: string;
            lang?: string;
        }[];
        subtitleTracks: {
            pid: number;
            type: string;
            lang?: string;
        }[];
    };
    parseChunks(chunk: ArrayBuffer, byte_start: number): number;
    private handleSectionSlice;
    private handlePESSlice;
    private emitSectionSlices;
    private emitPESSlices;
    private clearSlices;
    private parseSection;
    private parsePES;
    private parsePAT;
    private parsePMT;
    private parseSCTE35;
    private parseAV1Payload;
    private parseH264Payload;
    private parseH265Payload;
    private detectVideoMetadataChange;
    private isInitSegmentDispatched;
    private dispatchVideoInitSegment;
    private dispatchVideoMediaSegment;
    private dispatchAudioMediaSegment;
    private dispatchAudioVideoMediaSegment;
    private parseADTSAACPayload;
    private parseLOASAACPayload;
    private parseAC3Payload;
    private parseEAC3Payload;
    private parseOpusPayload;
    private parseMP3Payload;
    private detectAudioMetadataChange;
    private dispatchAudioInitSegment;
    private dispatchPESPrivateDataDescriptor;
    private parsePESPrivateDataPayload;
    private parseTimedID3MetadataPayload;
    private parsePGSPayload;
    private parseSynchronousKLVMetadataPayload;
    private parseAsynchronousKLVMetadataPayload;
    private parseSMPTE2038MetadataPayload;
    private parseSEIPayload;
    private getNearestTimestampMilliseconds;
    private getPcrBase;
    private getTimestamp;
}
export default TSDemuxer;
