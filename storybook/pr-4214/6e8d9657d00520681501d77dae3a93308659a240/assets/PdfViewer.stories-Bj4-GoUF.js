import{j as r,M as s}from"./iframe-C9SuZ1RJ.js";import{P as p}from"./pdf-viewer-DpBAscq7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTUv4P2a.js";import"./preload-helper-DMSK6AnV.js";import"./PdfViewer-oTaU2UAt.js";import"./index-DT_ukoYl.js";import"./BasePdfViewer-CT18d1lS.js";import"./BasePdfViewer.module.css-CUPzS2N0.js";import"./PdfViewerAnnotationLayer-CIGr1KU8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7PcU0Nx.js";import"./PdfViewerOutlineSidebar-BFdAhB4H.js";import"./PdfViewerSidebarHeader-DNyy5jIS.js";import"./useBaseUiId-7WRirspl.js";import"./useControlled-DGoyddZA.js";import"./CompositeRoot-CSEc_gTU.js";import"./CompositeItem-y2AxCYkL.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./composite-CLRoo5Je.js";import"./svgIconContainer-D69sxdT1.js";import"./PdfViewerSearchBar-BvPlYH3B.js";import"./chevron-up-B114p7Am.js";import"./chevron-down-BSUO84z0.js";import"./cross-Itynl6FX.js";import"./PdfViewerSidebar-LXLZjL8o.js";import"./index-tNEhjfv0.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./PdfViewerToolbar-DcCfIlUS.js";import"./Button-DPVeNaPl.js";import"./chevron-right-Dvqd7GPQ.js";import"./Input-D0BDhaw_.js";import"./search-N0RiDnX8.js";import"./spin-M9pbwnrt.js";import"./error-JN7vVG19.js";import"./withOsdkMetrics-FfcvjHUd.js";import"./makeExternalStore-BkAl_UIS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
