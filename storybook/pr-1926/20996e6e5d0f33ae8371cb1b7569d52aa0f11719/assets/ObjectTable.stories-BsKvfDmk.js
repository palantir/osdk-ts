import{j as i}from"./iframe-BatTRwfa.js";import{O as p}from"./object-table-Dsf1CmcX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BrtsrKhY.js";import"./preload-helper-1dO9BeYB.js";import"./Table-UGxGyS0c.js";import"./index-DOW0CwQC.js";import"./Dialog-CAUjG_JD.js";import"./cross-BDeJmnrY.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./useBaseUiId-DvfpcKJo.js";import"./InternalBackdrop-Zmd-LiLm.js";import"./composite-BBv4613M.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./index-H8QjAumC.js";import"./useEventCallback-YevN6u6r.js";import"./SkeletonBar-qWyKnZi_.js";import"./LoadingCell-81BR8Q6M.js";import"./ColumnConfigDialog-CVJ-Cu2x.js";import"./DraggableList-CLyslS_q.js";import"./search-CZvhHXAJ.js";import"./Input-C5LDgX9X.js";import"./useControlled-STn9JHtw.js";import"./Button-Du5jWjff.js";import"./small-cross-BPhAxJ8u.js";import"./ActionButton-BpZcQi9r.js";import"./Checkbox-DTGFBCTS.js";import"./useValueChanged-EUrHxfvD.js";import"./CollapsiblePanel--VPjmuy-.js";import"./MultiColumnSortDialog-Cion4ZU5.js";import"./MenuTrigger-CDiim23S.js";import"./CompositeItem-5Yv0-9Y-.js";import"./ToolbarRootContext-DNGFWytt.js";import"./getDisabledMountTransitionStyles-OE1kchG2.js";import"./getPseudoElementBounds-BD9k5WkF.js";import"./chevron-down-DrwZYKMn.js";import"./index-DAlaDr9m.js";import"./error-D_Nf9rBh.js";import"./BaseCbacBanner-CeTOgFrI.js";import"./makeExternalStore-CnkPGtRT.js";import"./Tooltip-IQeYH35x.js";import"./PopoverPopup-D35Mz83O.js";import"./debounce-BtG4PIwW.js";import"./useOsdkClient-xL_Zv1WO.js";import"./tick-DUFPZnzG.js";import"./DropdownField-CnB7jcM7.js";import"./isEqual-CZr5_eZA.js";import"./withOsdkMetrics-C5QyIn2v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
