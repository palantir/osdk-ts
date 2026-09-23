import{j as i}from"./iframe-C23O6NDH.js";import{O as p}from"./object-table-DEdNEfPN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C03L8fox.js";import"./preload-helper-C6QLezK5.js";import"./Table-BvvhMcgo.js";import"./index-X4EzQgBc.js";import"./Dialog-D5PenwcW.js";import"./cross-PRFvDACG.js";import"./svgIconContainer-CspjXoBM.js";import"./useBaseUiId-Dfg7k-g6.js";import"./InternalBackdrop-DdCETBpF.js";import"./composite-BUM50nEL.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./index-73jMkPGq.js";import"./useEventCallback-BABfShjI.js";import"./SkeletonBar-6dfzwPVF.js";import"./LoadingCell-BesO1jfE.js";import"./ColumnConfigDialog-BKagR6Mm.js";import"./DraggableList-BDrkDZc5.js";import"./search-Bu-mkKdB.js";import"./Input-Cu2UirtN.js";import"./useControlled-nFjFO6Es.js";import"./Button-jRCHNGhX.js";import"./small-cross-DA8JVgsF.js";import"./ActionButton-IxViueDP.js";import"./Checkbox-Dirazv5i.js";import"./useValueChanged-BcKOfJbz.js";import"./CollapsiblePanel-q28OJpfM.js";import"./MultiColumnSortDialog-CQWItabH.js";import"./MenuTrigger-N6PZJ6lD.js";import"./CompositeItem-MVk24y7z.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./getDisabledMountTransitionStyles-B1tcXlHO.js";import"./getPseudoElementBounds-Buqsg_Bi.js";import"./chevron-down-BjdzvOWL.js";import"./index-BGnkTDfz.js";import"./error-OxS9nPVJ.js";import"./BaseCbacBanner-CtPyhDWU.js";import"./makeExternalStore-B3L7DbLk.js";import"./Tooltip-BrDwoO8-.js";import"./PopoverPopup-BppHB-6W.js";import"./debounce-CCGBaTA1.js";import"./useOsdkClient-BejxCbr-.js";import"./tick-BXFU__eB.js";import"./DropdownField-BxoAoPOe.js";import"./isEqual-B4H-XeQD.js";import"./withOsdkMetrics-B-NwsNBy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
