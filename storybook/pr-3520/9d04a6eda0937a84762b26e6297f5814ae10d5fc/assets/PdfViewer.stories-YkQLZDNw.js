import{R as i,O as M,j as y,M as v}from"./iframe-zaZFzRfc.js";import{P as D}from"./pdf-viewer-C1WLcHx5.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BO6hILM2.js";import"./preload-helper-BPzNZYP4.js";import"./PdfRenderer-zTzoFqK-.js";import"./index-206m673p.js";import"./PdfViewer-9_lwT7cE.js";import"./PdfViewer.module.css-DLu1utT2.js";import"./PdfViewerAnnotationLayer-CfU6S6iz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKoPdvSa.js";import"./PdfViewerOutlineSidebar-CYUqaEJ-.js";import"./PdfViewerSidebarHeader-DQxL8UP0.js";import"./useBaseUiId-DM4zAgg1.js";import"./useControlled-DwrBXiOW.js";import"./CompositeRoot-CwXvTo5e.js";import"./CompositeItem-Cn6GveHW.js";import"./ToolbarRootContext-BYgKnyX4.js";import"./composite-dK2sbS7I.js";import"./svgIconContainer-DWecY478.js";import"./PdfViewerSearchBar-C3YtDdFR.js";import"./chevron-up-Pxwxhhqj.js";import"./chevron-down-Ckdvv8cc.js";import"./cross-BzMFftPD.js";import"./PdfViewerSidebar-B_JrtBFZ.js";import"./index-NYjipaEv.js";import"./index-C6Q_9jsy.js";import"./index-Cx8htPoR.js";import"./PdfViewerToolbar-m4gtQNkY.js";import"./Button-CUUXXHZv.js";import"./chevron-right-D7UgJ8ja.js";import"./Input-CiZ-mKk9.js";import"./minus-DKEc2O5k.js";import"./spin-DFIA_Bvg.js";import"./error-CZMPYbIV.js";import"./withOsdkMetrics-BvOgm0gI.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
