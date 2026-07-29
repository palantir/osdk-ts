import{R as i,O as M,j as y,M as v}from"./iframe-BDcNpx1Y.js";import{P as D}from"./pdf-viewer-Cg76hGnQ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BgOM2U86.js";import"./preload-helper-B8W4A-EM.js";import"./PdfRenderer-BVYzbWfQ.js";import"./index-BZ-lva3h.js";import"./PdfViewer-qGyWxVNw.js";import"./PdfViewer.module.css-BOdQdxGf.js";import"./PdfViewerAnnotationLayer-CqWuc-sR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZOcSong.js";import"./PdfViewerOutlineSidebar-C3_LcfFT.js";import"./PdfViewerSidebarHeader-BILhKLMM.js";import"./useBaseUiId-BSQqhVPu.js";import"./useControlled-B0r1txE-.js";import"./CompositeRoot-DBHv2IJ3.js";import"./CompositeItem-izGH71jB.js";import"./ToolbarRootContext-CXoqLWCF.js";import"./composite-CYvC5r6C.js";import"./svgIconContainer-Dwye2kJI.js";import"./PdfViewerSearchBar-BrZx3h3k.js";import"./chevron-up-D_n8w7Gh.js";import"./chevron-down-9jhT1hLJ.js";import"./cross-BLU5-0MQ.js";import"./PdfViewerSidebar-DCQcZk7R.js";import"./index-BRrfxGBP.js";import"./index-B0Lz0seM.js";import"./index-DyxQJUEU.js";import"./PdfViewerToolbar-WCrTwJ3f.js";import"./Button-C9rs6VgQ.js";import"./chevron-right-DWi2exfm.js";import"./Input-Otz8rYlG.js";import"./minus-B9JsFMJL.js";import"./spin--z6swhSJ.js";import"./error-B4_VvRST.js";import"./withOsdkMetrics-CdRWioQ5.js";import"./useRegisterUserAgent-CiLFJga7.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
