import{j as i}from"./iframe-Cm6Hi8JW.js";import{O as p}from"./object-table-CpajiRD3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-SCFcDmc_.js";import"./preload-helper-BYxBeAAs.js";import"./Table-Ct_a1hW1.js";import"./index-CDpDzJRy.js";import"./Dialog-CdmQQCwI.js";import"./cross-CqZ8qeBD.js";import"./svgIconContainer-agsfS07p.js";import"./useBaseUiId-DhmqNEB-.js";import"./InternalBackdrop-CJZwU14-.js";import"./composite-F8udgwsX.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./index-DJKRGaVd.js";import"./useEventCallback-C2xB0U8G.js";import"./SkeletonBar-DlBW95tE.js";import"./LoadingCell-DOkaa0iK.js";import"./ColumnConfigDialog-G4e5dztx.js";import"./DraggableList-BTFqvx5V.js";import"./search-9QnSKEDq.js";import"./Input-YqDpCJ5-.js";import"./useControlled-DQSuLFKk.js";import"./Button-Bc-QcRr6.js";import"./small-cross-B71BinCO.js";import"./ActionButton-CVOWP0Vj.js";import"./Checkbox-CHgUS3Dm.js";import"./useValueChanged-BgnUyWLY.js";import"./CollapsiblePanel-oFEh-cWN.js";import"./MultiColumnSortDialog-CYrgSMGk.js";import"./MenuTrigger-BBOOXY-p.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./getDisabledMountTransitionStyles-DwNKIeA1.js";import"./getPseudoElementBounds-7U3MdNEW.js";import"./chevron-down-yfyql6cd.js";import"./index-DID7t8gF.js";import"./error-Dmy_j7rB.js";import"./BaseCbacBanner-BDEZgR9M.js";import"./makeExternalStore-BMRo_idP.js";import"./Tooltip-YgKwei3V.js";import"./PopoverPopup-Al1KuNNN.js";import"./debounce-D0B2zS6f.js";import"./useOsdkClient-BlYAWhvy.js";import"./tick-4BXQbbZv.js";import"./DropdownField-CY7MjU_C.js";import"./isEqual-CCItJCpy.js";import"./withOsdkMetrics-BXiHxUU0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
