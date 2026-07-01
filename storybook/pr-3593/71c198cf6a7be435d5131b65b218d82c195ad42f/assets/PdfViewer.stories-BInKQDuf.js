import{R as i,O as M,j as y,M as v}from"./iframe-DQvr3Jav.js";import{P as D}from"./pdf-viewer-CZqO4Ib2.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B9TvfVcA.js";import"./preload-helper-ooBoNhn5.js";import"./PdfRenderer-x64MPR2w.js";import"./index-BRCt6cxp.js";import"./PdfViewer-CCYYWQBY.js";import"./PdfViewer.module.css-D9ywbOSO.js";import"./PdfViewerAnnotationLayer-BkB3MUO8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoQ8Pd7Q.js";import"./PdfViewerOutlineSidebar-Blv9Z-V2.js";import"./PdfViewerSidebarHeader-c4HZ5f0_.js";import"./useBaseUiId-LTESy3J9.js";import"./useControlled-nB7_8tNr.js";import"./CompositeRoot-CQIP56T5.js";import"./CompositeItem-sAparfMV.js";import"./ToolbarRootContext-B3YjyvfT.js";import"./composite-Ce57nFUb.js";import"./svgIconContainer-Ds2UL7bh.js";import"./PdfViewerSearchBar-BktPTEp0.js";import"./chevron-up-DTNqLoly.js";import"./chevron-down-Hj0rJYvj.js";import"./cross-tGtcXHr6.js";import"./PdfViewerSidebar-BQPlXQbI.js";import"./index-T0HFBwjj.js";import"./index-Cte7Z4aK.js";import"./index-Cnz5kJ0H.js";import"./PdfViewerToolbar-zKIVw7ES.js";import"./Button-68wzuZBE.js";import"./chevron-right-s9IEJjsb.js";import"./Input-ByClYEaD.js";import"./minus-C_9UKEBH.js";import"./search-BYW5nvbF.js";import"./spin-D629q30e.js";import"./error-CEIJFE1k.js";import"./withOsdkMetrics-iyY5gpTp.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
