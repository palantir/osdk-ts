import{R as i,O as M,j as y,M as v}from"./iframe-CLWfP4z2.js";import{P as D}from"./pdf-viewer-BDpj6rja.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Wc8F_bcH.js";import"./preload-helper-BzrZStXC.js";import"./PdfRenderer-tAFMeLSA.js";import"./index-BgBB7Z-e.js";import"./PdfViewer-BYk2ffi_.js";import"./PdfViewer.module.css-CqSXGwSo.js";import"./PdfViewerAnnotationLayer-CA250qpg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHr7pC2i.js";import"./PdfViewerOutlineSidebar-DvSvdpUO.js";import"./PdfViewerSidebarHeader-RNAe6jyz.js";import"./useBaseUiId-C9NJB7nL.js";import"./useControlled-Bwb3lJEh.js";import"./CompositeRoot-BqAIjVLK.js";import"./CompositeItem-DYrmc6lS.js";import"./ToolbarRootContext-BmDtDt78.js";import"./composite-h9wyn-2l.js";import"./svgIconContainer-D69P_S4a.js";import"./PdfViewerSearchBar-Cqq5mp9-.js";import"./chevron-up-D_Ar9kQ_.js";import"./chevron-down-C1Pfmq_D.js";import"./cross-C0Wr3hwd.js";import"./PdfViewerSidebar-D5oJHTyf.js";import"./index-Cm9O_44o.js";import"./index-Chb7ww3q.js";import"./index-Bl6F4jYh.js";import"./PdfViewerToolbar-C0Wp1456.js";import"./Button-Bn4klNWu.js";import"./chevron-right-CKkRYyXN.js";import"./Input-zzQ_1vwt.js";import"./minus-CmYTHzM7.js";import"./search-ODINC4xY.js";import"./spin-BH1Vz8wI.js";import"./error-Dy5ltek9.js";import"./withOsdkMetrics-1Ht0Uux3.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
