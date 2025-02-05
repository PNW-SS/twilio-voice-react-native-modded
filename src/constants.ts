export enum Constants {
  // React Native Voice SDK
  'ReactNativeVoiceSDK' = 'react-native',
  'ReactNativeVoiceSDKVer' = '1.4.0-rc1',

  // Scope names
  'ScopeVoice' = 'scopeVoice',
  'ScopeCall' = 'scopeCall',
  'ScopeCallMessage' = 'scopeCallMessage',
  'ScopeCallInvite' = 'scopeCallInvite',

  // Voice events
  // Common
  'VoiceEventError' = 'voiceEventError',
  'VoiceEventType' = 'type',

  // Error
  'VoiceErrorKeyError' = 'error',
  'VoiceErrorKeyCode' = 'code',
  'VoiceErrorKeyMessage' = 'message',

  // Registration
  'VoiceEventRegistered' = 'voiceEventRegistered',
  'VoiceEventUnregistered' = 'voiceEventUnregistered',

  // Call Info
  'CallInfoUuid' = 'uuid',
  'CallInfoSid' = 'sid',
  'CallInfoFrom' = 'from',
  'CallInfoTo' = 'to',
  'CallInfoIsMuted' = 'isMuted',
  'CallInfoIsOnHold' = 'isOnHold',
  'CallInfoState' = 'state',
  'CallInfoInitialConnectedTimestamp' = 'initialConnectedTimestamp',

  // Call States
  'CallStateConnected' = 'connected',
  'CallStateConnecting' = 'connecting',
  'CallStateDisconnected' = 'disconnected',
  'CallStateReconnecting' = 'reconnecting',
  'CallStateRinging' = 'ringing',

  // Call Invite Info
  'CallInviteInfoUuid' = 'uuid',
  'CallInviteInfoCallSid' = 'callSid',
  'CallInviteInfoFrom' = 'from',
  'CallInviteInfoTo' = 'to',
  'CallInviteInfoCustomParameters' = 'customParameters',

  // Cancelled Call Invite Info
  'CancelledCallInviteInfoUuid' = 'uuid',
  'CancelledCallInviteInfoCallSid' = 'callSid',
  'CancelledCallInviteInfoFrom' = 'from',
  'CancelledCallInviteInfoTo' = 'to',
  'CancelledCallInviteInfoCustomParameters' = 'customParameters',

  // Incoming Call Invite event
  'VoiceEventTypeValueIncomingCallInvite' = 'voiceEventTypeValueIncomingCallInvite',

  // Call Message
  'VoiceEventSid' = 'voiceEventSid',
  'CallMessage' = 'callMessage',
  'CallMessageContent' = 'content',
  'CallMessageContentType' = 'contentType',
  'CallMessageMessageType' = 'messageType',
  'JSEventKeyCallMessageInfo' = 'callMessage',

  // Audio Devices Updated Event
  'VoiceEventAudioDevicesUpdated' = 'voiceEventAudioDevicesUpdated',

  // Audio Device
  'AudioDeviceKeyUuid' = 'uuid',
  'AudioDeviceKeyName' = 'name',
  'AudioDeviceKeyType' = 'type',
  'AudioDeviceKeyAudioDevices' = 'audioDevices',
  'AudioDeviceKeySelectedDevice' = 'selectedDevice',
  'AudioDeviceKeyEarpiece' = 'earpiece',
  'AudioDeviceKeySpeaker' = 'speaker',
  'AudioDeviceKeyBluetooth' = 'bluetooth',

  // CallInvite events
  'CallInviteEventKeyType' = 'type',
  'CallInviteEventTypeValueAccepted' = 'callInviteEventTypeValueCallInviteAccepted',
  'CallInviteEventTypeValueNotificationTapped' = 'callInviteEventTypeValueCallInviteNotificationTapped',
  'CallInviteEventTypeValueRejected' = 'callInviteEventTypeValueCallInviteRejected',
  'CallInviteEventTypeValueCancelled' = 'callInviteEventTypeValueCallInviteCancelled',
  'CallInviteEventKeyCallSid' = 'callSid',

  // Call events
  // State
  'CallEventConnected' = 'callEventConnected',
  'CallEventConnectFailure' = 'callEventConnectFailure',
  'CallEventDisconnected' = 'callEventDisconnected',
  'CallEventReconnecting' = 'callEventReconnecting',
  'CallEventReconnected' = 'callEventReconnected',
  'CallEventRinging' = 'callEventRinging',

  // Quality warnings
  'CallEventQualityWarningsChanged' = 'callEventQualityWarningsChanged',
  'CallEventCurrentWarnings' = 'callEventCurrentWarnings',
  'CallEventPreviousWarnings' = 'callEventPreviousWarnings',

  // Call message events
  'CallEventMessageFailure' = 'callEventMessageFailure',
  'CallEventMessageReceived' = 'callEventMessageReceived',
  'CallEventMessageSent' = 'callEventMessageSent',

  // Call feedback score
  'CallFeedbackScoreNotReported' = 'callFeedbackScoreNotReported',
  'CallFeedbackScoreOne' = 'callFeedbackScoreOne',
  'CallFeedbackScoreTwo' = 'callFeedbackScoreTwo',
  'CallFeedbackScoreThree' = 'callFeedbackScoreThree',
  'CallFeedbackScoreFour' = 'callFeedbackScoreFour',
  'CallFeedbackScoreFive' = 'callFeedbackScoreFive',

  // Call feedback issue
  'CallFeedbackIssueNotReported' = 'callFeedbackIssueNotReported',
  'CallFeedbackIssueDroppedCall' = 'callFeedbackIssueDroppedCall',
  'CallFeedbackIssueAudioLatency' = 'callFeedbackIssueAudioLatency',
  'CallFeedbackIssueOneWayAudio' = 'callFeedbackIssueOneWayAudio',
  'CallFeedbackIssueChoppyAudio' = 'callFeedbackIssueChoppyAudio',
  'CallFeedbackIssueNoisyCall' = 'callFeedbackIssueNoisyCall',
  'CallFeedbackIssueEcho' = 'callFeedbackIssueEcho',

  // StatsReport
  'PeerConnectionId' = 'peerConnectionId',
  'LocalAudioTrackStats' = 'localAudioTrackStats',
  'RemoteAudioTrackStats' = 'remoteAudioTrackStats',
  'IceCandidatePairStats' = 'iceCandidatePairStats',
  'IceCandidateStats' = 'iceCandidateStats',
  'Codec' = 'codec',
  'PacketsLost' = 'packetsLost',
  'Ssrc' = 'ssrc',
  'TrackId' = 'trackId',
  'Timestamp' = 'timestamp',
  'BytesSent' = 'bytesSent',
  'PacketsSent' = 'packetsSent',
  'RoundTripTime' = 'roundTripTime',
  'AudioLevel' = 'audioLevel',
  'Jitter' = 'jitter',
  'BytesReceived' = 'bytesReceived',
  'Mos' = 'mos',
  'TransportId' = 'transportId',
  'LocalCandidateId' = 'localCandidateId',
  'RemoteCandidateId' = 'remoteCandidateId',
  'State' = 'state',
  'LocalCandidateIp' = 'localCandidateIp',
  'RemoteCandidateIp' = 'remoteCandidateIp',
  'Nominated' = 'nominated',
  'Writeable' = 'writeable',
  'Readable' = 'readable',
  'TotalRoundTripTime' = 'totalRoundTripTime',
  'CurrentRoundTripTime' = 'currentRoundTripTime',
  'AvailableOutgoingBitrate' = 'availableOutgoingBitrate',
  'AvailableIncomingBitrate' = 'availableIncomingBitrate',
  'RequestsReceived' = 'requestsReceived',
  'RequestsSent' = 'requestsSent',
  'ResponsesReceived' = 'responsesReceived',
  'ResponsesSent' = 'responsesSent',
  'RetransmissionsReceived' = 'retransmissionsReceived',
  'RetransmissionsSent' = 'retransmissionsSent',
  'ConsentRequestsReceived' = 'consentRequestsReceived',
  'ConsentRequestsSent' = 'consentRequestsSent',
  'ConsentResponsesReceived' = 'consentResponsesReceived',
  'ConsentResponsesSent' = 'consentResponsesSent',
  'ActiveCandidatePair' = 'activeCandidatePair',
  'RelayProtocol' = 'relayProtocol',
  'IsRemote' = 'isRemote',
  'Ip' = 'ip',
  'Port' = 'port',
  'Protocol' = 'protocol',
  'CandidateType' = 'candidateType',
  'Priority' = 'priority',
  'Url' = 'url',
  'Deleted' = 'deleted',
  'PacketsReceived' = 'packetsReceived',

  // IceCandidatePairState
  'StateFailed' = 'stateFailed',
  'StateFrozen' = 'stateFrozen',
  'StateInProgress' = 'stateInProgress',
  'StateSucceeded' = 'stateSucceeded',
  'StateWaiting' = 'stateWaiting',
  'StateUnknown' = 'stateUnknown',

  // iOS CallKit configuration
  'CallKitMaximumCallsPerCallGroup' = 'callKitMaximumCallsPerCallGroup',
  'CallKitMaximumCallGroups' = 'callKitMaximumCallGroups',
  'CallKitIncludesCallsInRecents' = 'callKitIncludesCallsInRecents',
  'CallKitSupportedHandleTypes' = 'callKitSupportedHandleTypes',
  'CallKitIconTemplateImageData' = 'callKitIconTemplateImageData',
  'CallKitRingtoneSound' = 'callKitRingtoneSound',
}
