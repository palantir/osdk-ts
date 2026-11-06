import{j as r,M as s}from"./iframe-CaPOT9dY.js";import{P as p}from"./pdf-viewer-DxQqamMl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BosK8j4x.js";import"./preload-helper-CSJav7MA.js";import"./PdfViewer-CmRraSNn.js";import"./index-Ho8J3uum.js";import"./BasePdfViewer-eo_63Zr0.js";import"./BasePdfViewer.module.css-D3wVYtDW.js";import"./PdfViewerAnnotationLayer-BSRZiu8f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MsPqh5ed.js";import"./PdfViewerOutlineSidebar--lcgEr0F.js";import"./PdfViewerSidebarHeader-Bflvp9Ae.js";import"./useBaseUiId-53CqlhMX.js";import"./useControlled-Desmn_f_.js";import"./CompositeRoot-DqLGM9re.js";import"./CompositeItem-BhgS6pAU.js";import"./ToolbarRootContext-DKDtUl7Y.js";import"./composite-D8pTE5q2.js";import"./svgIconContainer-4uAuruPa.js";import"./PdfViewerSearchBar-Cvn6Vc_F.js";import"./chevron-up-E1lyOaVz.js";import"./chevron-down-D1yx8BpO.js";import"./cross-Cgcm5Piu.js";import"./PdfViewerSidebar-BHW0X365.js";import"./index-BAZzkEjb.js";import"./index-DSxM7sDI.js";import"./index-93ZDer7j.js";import"./PdfViewerToolbar--36ximja.js";import"./Button-D6M8kmX2.js";import"./chevron-right-D7EewI-L.js";import"./Input-BuXaNZ_G.js";import"./search-BIzPRVvQ.js";import"./spin-B8zCzcn2.js";import"./error-D6rGwYTa.js";import"./withOsdkMetrics-CqZfQr7E.js";import"./makeExternalStore-B6NoTbNG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
