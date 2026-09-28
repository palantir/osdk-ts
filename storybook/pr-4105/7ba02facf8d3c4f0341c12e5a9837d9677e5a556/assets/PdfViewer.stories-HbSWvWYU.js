import{j as r,M as s}from"./iframe-zfG254O_.js";import{P as p}from"./pdf-viewer-C3HOvKsm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AN4tDAkT.js";import"./preload-helper-BVR1mWVD.js";import"./PdfViewer-CMxSVf9D.js";import"./index-Wj2BR0GO.js";import"./BasePdfViewer-DxcpW6Lq.js";import"./BasePdfViewer.module.css-B0rggeEq.js";import"./PdfViewerAnnotationLayer-BdS4uAOD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNdCOknr.js";import"./PdfViewerOutlineSidebar-CLpQ1VW8.js";import"./PdfViewerSidebarHeader-BXPYYxcu.js";import"./useBaseUiId-DDNAeb_I.js";import"./useControlled-CYuH3Kw2.js";import"./CompositeRoot-DiLvjzLz.js";import"./CompositeItem-7b58zS75.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./composite-DJ7hFQoT.js";import"./svgIconContainer-QVUVb6tE.js";import"./PdfViewerSearchBar-BNyAjmbu.js";import"./chevron-up-BEVl1Rnt.js";import"./chevron-down-omzDCKN7.js";import"./cross-CetEVi0b.js";import"./PdfViewerSidebar-zwwlILm2.js";import"./index-Cfc9ne_z.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./PdfViewerToolbar-BadzjxOt.js";import"./Button-XkjDQhxK.js";import"./chevron-right-DJfOj7uW.js";import"./Input-DnoFtOsb.js";import"./search-C1O_20Mr.js";import"./spin-BJ1DAHpc.js";import"./error-CZvS_ur6.js";import"./withOsdkMetrics-BSCahypJ.js";import"./makeExternalStore-Br87Teca.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
