import{j as i}from"./iframe-tf0495v_.js";import{O as p}from"./object-table-BX2UKp4I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COZ8Z4rC.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DUTrEumB.js";import"./index-D2AIaBAZ.js";import"./Dialog-BaER-36K.js";import"./cross--xJKKgee.js";import"./svgIconContainer-C-fh6e97.js";import"./useBaseUiId-CWsIXkuU.js";import"./InternalBackdrop-DJyPzldm.js";import"./composite-Ba9ifDV9.js";import"./index-DcxI05po.js";import"./index-BDW4zxbF.js";import"./index-9oKwKnEm.js";import"./useEventCallback-sbdHrv5E.js";import"./SkeletonBar-DFrGLOcG.js";import"./LoadingCell-DwlMJcze.js";import"./ColumnConfigDialog-D-fNtj8v.js";import"./DraggableList-Y630FWkj.js";import"./search-BWQUBjsa.js";import"./Input-DEfwNsC4.js";import"./useControlled-1fYDQt6k.js";import"./Button-6k_Ayrrm.js";import"./small-cross-DE-iog-f.js";import"./ActionButton-DNbVxKUR.js";import"./Checkbox-RIqPUoes.js";import"./useValueChanged-CPTd0fEe.js";import"./CollapsiblePanel-B86Q-6Un.js";import"./MultiColumnSortDialog-BOTtqull.js";import"./MenuTrigger-BlhdYyJf.js";import"./CompositeItem-D--GgbU9.js";import"./ToolbarRootContext-DPqmeZr5.js";import"./getDisabledMountTransitionStyles-BSjFObFI.js";import"./getPseudoElementBounds-DJjcZenL.js";import"./chevron-down-DSCp4Cy5.js";import"./index-DhVg9-FN.js";import"./error-DLfqe8ag.js";import"./BaseCbacBanner-1apOPMlj.js";import"./makeExternalStore-C_sk4jS_.js";import"./Tooltip-CvL86HHa.js";import"./PopoverPopup-CrMFPZWz.js";import"./debounce-ChAJRBGQ.js";import"./useOsdkClient-BNBK5eBr.js";import"./tick-BcpYaFi0.js";import"./DropdownField-D7Y-P9Ep.js";import"./isEqual-Dx457W3T.js";import"./withOsdkMetrics-B9UpkJYI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
