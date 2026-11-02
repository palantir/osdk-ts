import{j as r,M as s}from"./iframe-Biji2bf1.js";import{P as p}from"./pdf-viewer-D4WnkllF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdxcDBEj.js";import"./preload-helper-BnQD_pUs.js";import"./PdfViewer-kEql_fzE.js";import"./index-DfdB1ttn.js";import"./BasePdfViewer--5dNeVXR.js";import"./BasePdfViewer.module.css-C5zI-iiq.js";import"./PdfViewerAnnotationLayer-Bh7bFlx6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiLV-SH_.js";import"./PdfViewerOutlineSidebar-owm5v7j4.js";import"./PdfViewerSidebarHeader-Dwk47v41.js";import"./useBaseUiId-D8agI47X.js";import"./useControlled-CvQogkf4.js";import"./CompositeRoot-Bhuo6i00.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./composite-DTVuKyBl.js";import"./svgIconContainer-CtuHzH_7.js";import"./PdfViewerSearchBar-c-ZDPeUt.js";import"./chevron-up-NX2TCCeJ.js";import"./chevron-down-xdyo5QmP.js";import"./cross-DgO8Y3SG.js";import"./PdfViewerSidebar-BtNjxx-f.js";import"./index-CwIIM57l.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./PdfViewerToolbar-BuVz1N3x.js";import"./Button-B3fK-m0j.js";import"./chevron-right-bjytU0AS.js";import"./Input-Ka8u0CD4.js";import"./search-CLwp4qIO.js";import"./spin-tYaZ3MA-.js";import"./error-AacONtzC.js";import"./withOsdkMetrics-BRBNDhHT.js";import"./makeExternalStore-Wt3R0a85.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
