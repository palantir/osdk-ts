import{R as i,O as M,j as y,M as v}from"./iframe-B3ejg-GI.js";import{P as D}from"./pdf-viewer-iV240nT7.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DlK_z9fZ.js";import"./preload-helper-fSKAYz8W.js";import"./PdfRenderer-XEQSPykH.js";import"./index-g62t3B_I.js";import"./PdfViewer-DKb5Wsue.js";import"./PdfViewer.module.css-DrVyhGNm.js";import"./PdfViewerAnnotationLayer-ByRW7HY8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKLiAkxL.js";import"./PdfViewerOutlineSidebar-DkOyI6fw.js";import"./PdfViewerSidebarHeader-BJY58XF6.js";import"./useBaseUiId-D1BKrusH.js";import"./useControlled-CQa52Rqd.js";import"./CompositeRoot-CK8RA6Ga.js";import"./CompositeItem-V4OHK5w6.js";import"./ToolbarRootContext-BgYrjm3l.js";import"./composite-Bt9yRfYp.js";import"./svgIconContainer-DEdmzDTv.js";import"./PdfViewerSearchBar-fCcct7Bm.js";import"./chevron-up-q0JWyAYq.js";import"./chevron-down-DT1Rf9Ig.js";import"./cross-B-qm3kZu.js";import"./PdfViewerSidebar-iKd30SPy.js";import"./index-WGxuTJD4.js";import"./index-WnbprtO7.js";import"./index-C9Fw3uQJ.js";import"./PdfViewerToolbar-2lwdXvpO.js";import"./Button-DNrF6IbB.js";import"./chevron-right-B_syUhOD.js";import"./Input-Chb0fvGl.js";import"./minus-F_9Jlsk0.js";import"./spin-CF6oEArb.js";import"./error-BtwJmqZN.js";import"./withOsdkMetrics-uOGyEtwZ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
