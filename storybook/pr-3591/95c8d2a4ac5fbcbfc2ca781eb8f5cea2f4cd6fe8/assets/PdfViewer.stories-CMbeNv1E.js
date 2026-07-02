import{R as i,O as M,j as y,M as v}from"./iframe-C9KukGcT.js";import{P as D}from"./pdf-viewer-C5YDf6sD.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D6Xki7Fj.js";import"./preload-helper-B5RKkod9.js";import"./PdfRenderer-DDMe_Yxc.js";import"./index-DckjiwPg.js";import"./PdfViewer-Xg4hNi-R.js";import"./PdfViewer.module.css-CLQ4HgFv.js";import"./PdfViewerAnnotationLayer-CaoQ4dTg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ctsqa-AT.js";import"./PdfViewerOutlineSidebar-BS9wvDTr.js";import"./PdfViewerSidebarHeader-CF2dLIgs.js";import"./useBaseUiId-BYPPXWEn.js";import"./useControlled-tBnUvvmj.js";import"./CompositeRoot-BRzQ1XyZ.js";import"./CompositeItem-CP7tqChf.js";import"./ToolbarRootContext-C0apraRP.js";import"./composite-CC0qdsOn.js";import"./svgIconContainer-DQNVzmGK.js";import"./PdfViewerSearchBar-BmifqJhu.js";import"./chevron-up-6N5cA8pX.js";import"./chevron-down-DrEALlKG.js";import"./cross-v2Orz344.js";import"./PdfViewerSidebar-RGlMhRJ2.js";import"./index-BhtC8O2w.js";import"./index-CaS66MGw.js";import"./index-CtW_zaYy.js";import"./PdfViewerToolbar-D-nzjQKp.js";import"./Button-CWiFTA_A.js";import"./chevron-right-DpjGsYik.js";import"./Input-BHuG8cS0.js";import"./minus-CGUS0-7m.js";import"./search-B1su9-q6.js";import"./spin-CP5oicHt.js";import"./error-CN9Oe3Cl.js";import"./withOsdkMetrics-Dxk7tSfz.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
