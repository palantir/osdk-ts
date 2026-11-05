import{j as r,M as s}from"./iframe-NpRIbPdx.js";import{P as p}from"./pdf-viewer-Ddnu2nWn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsJ3uWcw.js";import"./preload-helper-OSq5jQkX.js";import"./PdfViewer-DjiZjws6.js";import"./index-CY16uySw.js";import"./BasePdfViewer-CHyNHexc.js";import"./BasePdfViewer.module.css-DSE1wa24.js";import"./PdfViewerAnnotationLayer-CcxkCc5m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsLHjpb7.js";import"./PdfViewerOutlineSidebar-DiFpnXYK.js";import"./PdfViewerSidebarHeader-D26hvRuc.js";import"./useBaseUiId-B58WCAya.js";import"./useControlled-C_x2TKVp.js";import"./CompositeRoot-Dyky4g3-.js";import"./CompositeItem-9iq6yCgJ.js";import"./ToolbarRootContext-zUNFbjuY.js";import"./composite-BuQ8bNLj.js";import"./svgIconContainer-D56q5fZV.js";import"./PdfViewerSearchBar-SAPALbix.js";import"./chevron-up-1QfVIQc_.js";import"./chevron-down-BnVBaJX5.js";import"./cross-D_KA-OEe.js";import"./PdfViewerSidebar-KVnICaIU.js";import"./index-DdBpKYEV.js";import"./index-BeW67UVI.js";import"./index-Bhk4lf9n.js";import"./PdfViewerToolbar-hKGcPDas.js";import"./Button-B7hLTnAe.js";import"./chevron-right-BAhDFavb.js";import"./Input-geD0QmM7.js";import"./search-BQKjluR2.js";import"./spin-DqjO76QN.js";import"./error-B8p2hdA4.js";import"./withOsdkMetrics-RYSsSWu2.js";import"./makeExternalStore-he_3GqFk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
