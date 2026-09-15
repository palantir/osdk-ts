import{j as i}from"./iframe-dxrUGHlK.js";import{O as p}from"./object-table-hg5iYLBs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dill-K0e.js";import"./preload-helper-B9qIDFMl.js";import"./Table-BDJVErev.js";import"./index-DPQcu4-a.js";import"./Dialog-BdAvzbRZ.js";import"./cross-Dj8MH7yM.js";import"./svgIconContainer-D-3aEKZU.js";import"./useBaseUiId-BsvKb-r1.js";import"./InternalBackdrop-DlhtBUyp.js";import"./composite-Dw-SYZmG.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./index-D5-q3DyH.js";import"./useEventCallback-ayjMMOqN.js";import"./SkeletonBar-C2WYuCYy.js";import"./LoadingCell-C3rYW6d3.js";import"./ColumnConfigDialog-C1UbL8k6.js";import"./DraggableList-C3qnRuj_.js";import"./search-CVhjqWpu.js";import"./Input-C2FrKznv.js";import"./useControlled-D5pah6Ut.js";import"./Button-v2rih8HU.js";import"./small-cross-DrUhNudg.js";import"./ActionButton-TJz4kjAm.js";import"./Checkbox-CaAY45uN.js";import"./useValueChanged-BsqSHN0m.js";import"./CollapsiblePanel-BHW3YOjn.js";import"./MultiColumnSortDialog-DJR1GnhR.js";import"./MenuTrigger-BpOuL8ih.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./getDisabledMountTransitionStyles-6BSbBO0S.js";import"./getPseudoElementBounds-B_zagfDH.js";import"./chevron-down-Ci5voemn.js";import"./index-BZzuVaIM.js";import"./error-DiHcLZ6r.js";import"./BaseCbacBanner-ebOZnzxu.js";import"./makeExternalStore-DsTmi0Ui.js";import"./Tooltip-BsaNTiq4.js";import"./PopoverPopup-BA5CaoZf.js";import"./debounce-DSygVot5.js";import"./useOsdkClient-CDGZBRrB.js";import"./tick-BnzW6v2L.js";import"./DropdownField-B_Tlb7nO.js";import"./isEqual-DVT4JLDM.js";import"./withOsdkMetrics-C48cTPuA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
