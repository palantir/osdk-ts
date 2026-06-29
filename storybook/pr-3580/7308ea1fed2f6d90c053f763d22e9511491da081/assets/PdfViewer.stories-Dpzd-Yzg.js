import{R as i,O as M,j as y,M as v}from"./iframe-BhaVgwJF.js";import{P as D}from"./pdf-viewer-7sydXcW5.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CHUl6C6O.js";import"./preload-helper-DqVS_s6V.js";import"./PdfRenderer-CAQRJegM.js";import"./index-BDOsboJF.js";import"./PdfViewer-Cr3dNKcu.js";import"./PdfViewer.module.css-DqZgLUbl.js";import"./PdfViewerAnnotationLayer-Ch2CNVsh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2zCfrHz.js";import"./PdfViewerOutlineSidebar-BcoAJrHv.js";import"./PdfViewerSidebarHeader-CGNtlWZa.js";import"./useBaseUiId-B92PsFWM.js";import"./useControlled-1bY20Uqz.js";import"./CompositeRoot-DXBnsPT_.js";import"./CompositeItem-HgTZsmh3.js";import"./ToolbarRootContext-CmBg7Gns.js";import"./composite-Jl80SJua.js";import"./svgIconContainer-DakBFGqu.js";import"./PdfViewerSearchBar-DYTyicf7.js";import"./chevron-up-B-UYvj5X.js";import"./chevron-down-DWlReEPz.js";import"./cross-V5vChtTh.js";import"./PdfViewerSidebar-79QhooHh.js";import"./index-DZ1wXuHu.js";import"./index-CdWjQmdV.js";import"./index-Cebglo5K.js";import"./PdfViewerToolbar-Beag0Xy9.js";import"./Button-CrvtM6Ii.js";import"./chevron-right-wdZsYkzq.js";import"./Input-AvHqkE0x.js";import"./minus-DChzWoWb.js";import"./spin-B3Ph6geo.js";import"./error-CiNhj8KY.js";import"./withOsdkMetrics-B6RafAIK.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
