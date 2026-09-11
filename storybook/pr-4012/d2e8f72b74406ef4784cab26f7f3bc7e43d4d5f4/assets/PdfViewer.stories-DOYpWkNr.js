import{j as r,M as s}from"./iframe-C-mlL1d1.js";import{P as p}from"./pdf-viewer-DSgGk7-v.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DizaxHv_.js";import"./preload-helper-BUxDkfWR.js";import"./PdfViewer-Df8khJfO.js";import"./index-B6OYb_DA.js";import"./BasePdfViewer-DpLg3Ph3.js";import"./BasePdfViewer.module.css-BceYQpkh.js";import"./PdfViewerAnnotationLayer-_eSCAhhA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUgI4Or2.js";import"./PdfViewerOutlineSidebar-CDWQmyL4.js";import"./PdfViewerSidebarHeader-CyLpsXUF.js";import"./useBaseUiId-BKlcYEBY.js";import"./useControlled-Bq8qBaBJ.js";import"./CompositeRoot-V7a5vBQK.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./composite-T8-lg8nr.js";import"./svgIconContainer-DOFv3aDL.js";import"./PdfViewerSearchBar-BO0VFkLI.js";import"./chevron-up-B17yXw4M.js";import"./chevron-down-CfvB8SzD.js";import"./cross-bL1PiJj_.js";import"./PdfViewerSidebar-C-DDPQG8.js";import"./index-Bb5I7VlI.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./PdfViewerToolbar-BXZGZEO-.js";import"./Button-To2COh7T.js";import"./chevron-right-DXi-IoZ6.js";import"./Input-DwnchpfY.js";import"./search-9EoPaIsu.js";import"./spin-C7ca0WeB.js";import"./error-C0XWqrZ2.js";import"./withOsdkMetrics-DYUhhphE.js";import"./makeExternalStore-Dn2EZb1T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
