import{j as r,M as s}from"./iframe-CLDsBV4b.js";import{P as p}from"./pdf-viewer-CLA9S4q8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVvhRSGw.js";import"./preload-helper-ImY-3Tkl.js";import"./PdfRenderer-B3KjUNf_.js";import"./index-CVbsMZkU.js";import"./PdfViewer-Ba-W7PCy.js";import"./PdfViewer.module.css-CPl2lbGl.js";import"./PdfViewerAnnotationLayer-CFkjljHY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXh8Vx3T.js";import"./PdfViewerOutlineSidebar-CwiTceDd.js";import"./PdfViewerSidebarHeader-D_0c6g1W.js";import"./useBaseUiId-Dv4KmylI.js";import"./useControlled-BH-3hGUj.js";import"./CompositeRoot--pix8Czn.js";import"./CompositeItem-Cfq73WMB.js";import"./ToolbarRootContext-D9bBLRO0.js";import"./composite-BRMsnUXF.js";import"./svgIconContainer-B0-Osyzd.js";import"./PdfViewerSearchBar-BISF5Ps4.js";import"./chevron-up-BzEJBQ7U.js";import"./chevron-down-DA1iqkEX.js";import"./cross-uUJOgjDM.js";import"./PdfViewerSidebar-B6eyw_KR.js";import"./index-Dh36Af02.js";import"./index-e4mxTqMP.js";import"./index-EDzrlKGw.js";import"./PdfViewerToolbar-BiN2rtoc.js";import"./Button--AYZir1z.js";import"./chevron-right-CWBzLDkH.js";import"./Input-5UhDKxar.js";import"./minus-CtrBneY5.js";import"./search-BfVogbzH.js";import"./spin-DfYJmDDY.js";import"./error-DKRBPOsK.js";import"./withOsdkMetrics-lwB191nh.js";import"./makeExternalStore-CMSaaukK.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
