import{R as i,O as M,j as y,M as v}from"./iframe-kFHrHtRc.js";import{P as D}from"./pdf-viewer-DaQcRSKI.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CR1kuob1.js";import"./preload-helper-6dFd8xKu.js";import"./PdfRenderer-CK6Ny1uN.js";import"./index-tBl6rlIF.js";import"./PdfViewer-C4S8W9H3.js";import"./PdfViewer.module.css-CnmytQwW.js";import"./PdfViewerAnnotationLayer-Dsp2WaUz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJCuehwJ.js";import"./PdfViewerOutlineSidebar-C8nwNQ2C.js";import"./PdfViewerSidebarHeader-DVS6Tf0h.js";import"./useBaseUiId-BbnENGlt.js";import"./useControlled-7bkozBRa.js";import"./CompositeRoot-D9hqPBEf.js";import"./CompositeItem-SdMSeS9K.js";import"./ToolbarRootContext-DnEgARL3.js";import"./composite-BYaxL6-t.js";import"./svgIconContainer-DiDlj_r8.js";import"./PdfViewerSearchBar-Dm6i7iM-.js";import"./chevron-up-x6qmiepv.js";import"./chevron-down-C945aAFK.js";import"./cross-DhXvZx4j.js";import"./PdfViewerSidebar-BTJ4DkQS.js";import"./index-B55enKSC.js";import"./index-CTTCZhQQ.js";import"./index-AIp5TQ1k.js";import"./PdfViewerToolbar-C3ZD-ixL.js";import"./Button-BtRF90P5.js";import"./chevron-right-Ot-QS3KY.js";import"./Input-BTECeJwQ.js";import"./minus-7XFF7Rs7.js";import"./spin-CuQzlB6x.js";import"./error-myjgtVDC.js";import"./withOsdkMetrics-DDv31IRr.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
