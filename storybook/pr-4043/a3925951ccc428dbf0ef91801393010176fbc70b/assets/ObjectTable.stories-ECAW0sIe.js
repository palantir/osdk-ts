import{j as i}from"./iframe-DRBbLQEP.js";import{O as p}from"./object-table-sUL5tWKm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CG9dWnAe.js";import"./preload-helper-Bt1-OzgM.js";import"./Table-rR_QztEz.js";import"./index-DKGchVF5.js";import"./Dialog-D9u2m3uG.js";import"./cross-CUrCvhqT.js";import"./svgIconContainer-DUoraq0-.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./InternalBackdrop-TfRvWb5r.js";import"./composite-BQ1GsMvw.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./index-BXLTNv1i.js";import"./useEventCallback-D23WH7I3.js";import"./SkeletonBar-CkkbWTlQ.js";import"./LoadingCell-BMEY3efX.js";import"./ColumnConfigDialog-Cpe2EKts.js";import"./DraggableList-CBNUak8l.js";import"./search-DM25wUgq.js";import"./Input-DCqgylfG.js";import"./useControlled-D-0ahwbd.js";import"./Button-YsHjEWcc.js";import"./small-cross-Qpn-pdOm.js";import"./ActionButton-xScfZGhC.js";import"./Checkbox-DiMmQyM_.js";import"./useValueChanged-B9a9bBNB.js";import"./CollapsiblePanel-CfADBTSn.js";import"./MultiColumnSortDialog-BEDY0mXN.js";import"./MenuTrigger-CI1ocvnA.js";import"./CompositeItem-DHU6LUkY.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./getDisabledMountTransitionStyles-CRFpWsUL.js";import"./getPseudoElementBounds-CEq_ua0q.js";import"./chevron-down-D9sfivXL.js";import"./index-BFx1Z8Pw.js";import"./error-Bly5Bi76.js";import"./BaseCbacBanner-DWPKuije.js";import"./makeExternalStore-DUU8gKNu.js";import"./Tooltip-BokzoO6e.js";import"./PopoverPopup-BNl-xY3a.js";import"./debounce-F863pl25.js";import"./useOsdkClient-4YE_Fd5v.js";import"./tick-N613LFVJ.js";import"./DropdownField-Dwy3SrHP.js";import"./isEqual-DmoAqAF3.js";import"./withOsdkMetrics-BqMyyD8f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
