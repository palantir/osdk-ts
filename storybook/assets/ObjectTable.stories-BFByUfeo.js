import{j as i}from"./iframe-DFUOfUSe.js";import{O as p}from"./object-table-eI_MpLLM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBRoBAVM.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CC8_Mmh6.js";import"./index-kBc01955.js";import"./Dialog-_LqnPVgX.js";import"./cross-B1MvVSxZ.js";import"./svgIconContainer-BEzB0n9v.js";import"./useBaseUiId-iIiGKJbX.js";import"./InternalBackdrop-C8Deyz8F.js";import"./composite-1eFG2hxZ.js";import"./index-CjvFN5_9.js";import"./index-BENq6zow.js";import"./index-DszQvq9I.js";import"./useEventCallback-wAoswJKo.js";import"./SkeletonBar-DGafzJ4m.js";import"./LoadingCell-DUifgGui.js";import"./ColumnConfigDialog-CO5Wyt08.js";import"./DraggableList-RxOxYVED.js";import"./search-DJSgEYs8.js";import"./Input-BQVjPxIe.js";import"./useControlled-v23QOsKY.js";import"./Button-ixew-sI_.js";import"./small-cross-C4xB7Q44.js";import"./ActionButton-DTZYfIEP.js";import"./Checkbox-DRApCZzW.js";import"./useValueChanged-DJsabPfY.js";import"./CollapsiblePanel-CpgSESuR.js";import"./MultiColumnSortDialog-EJkaScIR.js";import"./MenuTrigger-F77Zj-N2.js";import"./CompositeItem-DFHRfQA2.js";import"./ToolbarRootContext-BDheAh6f.js";import"./getDisabledMountTransitionStyles-1clqSlQZ.js";import"./getPseudoElementBounds-C7b_XFOL.js";import"./chevron-down-CYOYBDrS.js";import"./index-DvkqE7yU.js";import"./error-D5rDq67F.js";import"./BaseCbacBanner-DNewZ_zV.js";import"./makeExternalStore-CBoWfP78.js";import"./Tooltip-Fm9QhiyQ.js";import"./PopoverPopup-Dtz2QEwE.js";import"./debounce-DziqxyEi.js";import"./useOsdkClient-BjSmFqIm.js";import"./tick-DzTIrrQ0.js";import"./DropdownField-BhG0LvOe.js";import"./isEqual-CP-xjrih.js";import"./withOsdkMetrics-BWtToZ6G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
