import{R as i,O as M,j as y,M as v}from"./iframe-CQ07y5HK.js";import{P as D}from"./pdf-viewer-DqvjRXZy.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Bhb5VAZy.js";import"./preload-helper-CDHTh53I.js";import"./PdfRenderer-Y-67uNPa.js";import"./index-DxWybDqD.js";import"./PdfViewer-DAdOMKJh.js";import"./PdfViewer.module.css-OfVKPMBV.js";import"./PdfViewerAnnotationLayer-DT4NUN5P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3eauEz1.js";import"./PdfViewerOutlineSidebar-BmE-nViv.js";import"./PdfViewerSidebarHeader-2O4fzelL.js";import"./useBaseUiId-BdgViNgb.js";import"./useControlled-XwgekNzY.js";import"./CompositeRoot-DycVUDvx.js";import"./CompositeItem-C5VffWzZ.js";import"./ToolbarRootContext-D6sTxHtK.js";import"./composite-B4Wonh6-.js";import"./svgIconContainer-D37-ELxb.js";import"./PdfViewerSearchBar-B3TcrPSn.js";import"./chevron-up-BEwe9jIF.js";import"./chevron-down-WOZLPJsd.js";import"./cross-DHMoEpkG.js";import"./PdfViewerSidebar-BkmhAt-2.js";import"./index-DVpeScFJ.js";import"./index-CHm7PYgv.js";import"./index-CRheeQCA.js";import"./PdfViewerToolbar-CuYv-ymG.js";import"./Button-ByCBlqJ0.js";import"./chevron-right-Bts7bvMd.js";import"./Input-BqSL4yqL.js";import"./minus-DgS6J_iF.js";import"./search-DEgh1F1B.js";import"./spin-BvX7UOAD.js";import"./error-Dx5xs3Ao.js";import"./withOsdkMetrics-CdHds5Aj.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
