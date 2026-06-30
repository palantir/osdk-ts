import{R as i,O as M,j as y,M as v}from"./iframe-hA54k6Ra.js";import{P as D}from"./pdf-viewer--g70SCPG.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CNH7TiNm.js";import"./preload-helper-B2ctPuK5.js";import"./PdfRenderer-fRXZ7_oM.js";import"./index-CuWY2XwM.js";import"./PdfViewer-DRwP5RKA.js";import"./PdfViewer.module.css-Chjx8BiJ.js";import"./PdfViewerAnnotationLayer-Diep747C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4gLXoy2.js";import"./PdfViewerOutlineSidebar-Bp7cFADj.js";import"./PdfViewerSidebarHeader-oEpFz13l.js";import"./useBaseUiId-D7evU5vy.js";import"./useControlled-CLK-WO_f.js";import"./CompositeRoot-CBts9DsF.js";import"./CompositeItem-fKFw6KEZ.js";import"./ToolbarRootContext-CxUD8pdl.js";import"./composite-CgGAQ8DQ.js";import"./svgIconContainer-Bt5A1ZM1.js";import"./PdfViewerSearchBar-Dd6hXsQW.js";import"./chevron-up-DthjkdKN.js";import"./chevron-down--kw9M12S.js";import"./cross-DT1vpwrk.js";import"./PdfViewerSidebar-CodlNOKr.js";import"./index-CGP2Zvg-.js";import"./index-CDT2pjS0.js";import"./index-BXS422Xk.js";import"./PdfViewerToolbar-DXHJazh-.js";import"./Button-C0ZpVY7M.js";import"./chevron-right-D0FD826q.js";import"./Input-3RHKQlOe.js";import"./minus-Dr_q24S2.js";import"./search-DyXrHlWh.js";import"./spin-By2a--Cz.js";import"./error-Bt_KfG7R.js";import"./withOsdkMetrics-BYUsJTYh.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
