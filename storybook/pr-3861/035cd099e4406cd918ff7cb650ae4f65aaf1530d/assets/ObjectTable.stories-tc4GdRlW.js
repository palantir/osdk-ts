import{j as i}from"./iframe-w1UAnkHZ.js";import{O as p}from"./object-table-c1DiMKWv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pAOEMwAt.js";import"./preload-helper-G_k10dw4.js";import"./Table-BBGIvijy.js";import"./index-DAjwvQw3.js";import"./Dialog-CevHLfzG.js";import"./cross-DKbNK5yX.js";import"./svgIconContainer-D_dZC5hw.js";import"./useBaseUiId-B91xIf3E.js";import"./InternalBackdrop-DoA4GFbR.js";import"./composite-BpZVqO51.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./index-DMQPDlV7.js";import"./useEventCallback-CzmDrtIN.js";import"./SkeletonBar-DLj25SiX.js";import"./LoadingCell-BDt7Vxxl.js";import"./ColumnConfigDialog-jklgvSGq.js";import"./DraggableList-Drzx4Sk1.js";import"./search-DeM19rtD.js";import"./Input-tf1Imv2g.js";import"./useControlled-CyfOlT88.js";import"./Button-Bh0hjCLH.js";import"./small-cross-DRvh664v.js";import"./ActionButton-YEM69ZkU.js";import"./Checkbox-BYNjqoVY.js";import"./useValueChanged-nF-imWmC.js";import"./CollapsiblePanel-D1ce4adR.js";import"./MultiColumnSortDialog-BZm0J8oX.js";import"./MenuTrigger-Clp0CXQY.js";import"./CompositeItem-BFhWCO7j.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./getDisabledMountTransitionStyles-Dee7_KOo.js";import"./getPseudoElementBounds-BiUigiPq.js";import"./chevron-down-B9i1zJjC.js";import"./index-CyLlbcvz.js";import"./error-CkfO44o7.js";import"./BaseCbacBanner-BkLY3iq6.js";import"./makeExternalStore-BvX6IRpK.js";import"./Tooltip-BNCsBTMc.js";import"./PopoverPopup-GxAjlUu6.js";import"./debounce-DOKHWH7Z.js";import"./useOsdkClient-am2GQgj5.js";import"./tick-CxunbKa6.js";import"./DropdownField-CYSEfVTF.js";import"./isEqual-BDJAkq-c.js";import"./withOsdkMetrics-DrpjUk54.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
