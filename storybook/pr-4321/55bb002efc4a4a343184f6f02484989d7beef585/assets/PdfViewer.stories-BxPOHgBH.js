import{j as r,M as s}from"./iframe-B5RHZXsu.js";import{P as p}from"./pdf-viewer-BdF9pJ5K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDBz0rHZ.js";import"./preload-helper-tHX7vXiV.js";import"./PdfViewer-e4TxerBt.js";import"./index-UZy2jxQz.js";import"./BasePdfViewer-Bih_cxXQ.js";import"./BasePdfViewer.module.css-CVC8PjgV.js";import"./PdfViewerAnnotationLayer-C4o2EK_s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU1x8vpA.js";import"./PdfViewerOutlineSidebar-C6Nau6kH.js";import"./PdfViewerSidebarHeader-OgOapOdk.js";import"./useBaseUiId-CuPoV62G.js";import"./useControlled-DlsNgd8K.js";import"./CompositeRoot--gYXUvfe.js";import"./CompositeItem-XiaPpMq3.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./composite-BR00GrWy.js";import"./svgIconContainer-B_LjJP-U.js";import"./PdfViewerSearchBar-DMO_Jxvv.js";import"./chevron-up-B8jThciJ.js";import"./chevron-down-UdMSp5ir.js";import"./cross-BlEfWoOy.js";import"./PdfViewerSidebar-Kd0DWhle.js";import"./index-BlmshJoj.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./PdfViewerToolbar-DN5bw1Hd.js";import"./Button-Cie7BQIA.js";import"./chevron-right-C9fvzo_M.js";import"./Input-BXzrXoG1.js";import"./search-CznqLCy2.js";import"./spin-l04BVOFW.js";import"./error-BhBB_kyZ.js";import"./withOsdkMetrics-VuSz_R8I.js";import"./makeExternalStore-82wrc-fZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
