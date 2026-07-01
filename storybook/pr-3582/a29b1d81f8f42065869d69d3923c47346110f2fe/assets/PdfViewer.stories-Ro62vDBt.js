import{R as i,O as M,j as y,M as v}from"./iframe-DPif3BCt.js";import{P as D}from"./pdf-viewer-WSAKXCiw.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Dol0aQuG.js";import"./preload-helper-BbPxCDmH.js";import"./PdfRenderer-BYycenPZ.js";import"./index-DlKJyA6f.js";import"./PdfViewer-C6iepopb.js";import"./PdfViewer.module.css-BbddXjhb.js";import"./PdfViewerAnnotationLayer-CARxFTxn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsZVuu50.js";import"./PdfViewerOutlineSidebar-DZJtnnmz.js";import"./PdfViewerSidebarHeader-DSPMjItJ.js";import"./useBaseUiId-1LP5pxZR.js";import"./useControlled-bK4vBxg8.js";import"./CompositeRoot-C0c3205c.js";import"./CompositeItem-C-6zUN9Y.js";import"./ToolbarRootContext-DNYYxNIX.js";import"./composite-Du3vYNL-.js";import"./svgIconContainer-CMyuo72G.js";import"./PdfViewerSearchBar-CcRVTvQf.js";import"./chevron-up-CRP5z11Z.js";import"./chevron-down-OrYSk-BY.js";import"./cross-B3XRATNr.js";import"./PdfViewerSidebar-CB6z5kX-.js";import"./index-CG_fuOXb.js";import"./index-CS7wiWS2.js";import"./index-C2K5BBQe.js";import"./PdfViewerToolbar-BClj71T7.js";import"./Button-DL74wRaw.js";import"./chevron-right-Ba4dQnOR.js";import"./Input-ChIFSgLe.js";import"./minus-CWzGHwBR.js";import"./search-HlRbx8Td.js";import"./spin-DmTgM3XS.js";import"./error-B3gLJ4JV.js";import"./withOsdkMetrics-BbG2_MZe.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
