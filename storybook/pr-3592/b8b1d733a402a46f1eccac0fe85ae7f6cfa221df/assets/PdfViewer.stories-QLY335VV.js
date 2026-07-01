import{R as i,O as M,j as y,M as v}from"./iframe-hi2BxIHC.js";import{P as D}from"./pdf-viewer-B8NFkTRZ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-De-jpnE7.js";import"./preload-helper-ZxDKr6DS.js";import"./PdfRenderer-54o8r8XL.js";import"./index-CFxCkbUH.js";import"./PdfViewer-W7c-Uil1.js";import"./PdfViewer.module.css-F6DhZxco.js";import"./PdfViewerAnnotationLayer-ykS2SK4H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCR08t4R.js";import"./PdfViewerOutlineSidebar-ArBgAZ_S.js";import"./PdfViewerSidebarHeader-CIPaZEd8.js";import"./useBaseUiId-B_tYD7-Z.js";import"./useControlled-CNI1KcEl.js";import"./CompositeRoot-D8AVYMoL.js";import"./CompositeItem-B5-Du_uy.js";import"./ToolbarRootContext-g85W73-P.js";import"./composite-8iwrm9g9.js";import"./svgIconContainer-C-L2PUSb.js";import"./PdfViewerSearchBar-zFtNaf5K.js";import"./chevron-up-CIEfDBTg.js";import"./chevron-down-C_Gvrc9A.js";import"./cross-DvXT3q5F.js";import"./PdfViewerSidebar-BZp59zuq.js";import"./index-C2kzkxMt.js";import"./index-3yirHU9f.js";import"./index-DXA0rk4Q.js";import"./PdfViewerToolbar-Beqsy0-w.js";import"./Button-B7N2mn7E.js";import"./chevron-right-FRURVSQ-.js";import"./Input-B7tYC-Xs.js";import"./minus-BA9uP_V1.js";import"./search-DtNWi_d_.js";import"./spin-DIZsgPou.js";import"./error-DdENDWQJ.js";import"./withOsdkMetrics-yW5Lus8o.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
