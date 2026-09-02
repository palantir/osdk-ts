import{j as i}from"./iframe-4yYB2ECu.js";import{O as p}from"./object-table-DTcObYbZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CREqH-gE.js";import"./preload-helper-C93dm6Ya.js";import"./Table-VfWP1IQk.js";import"./index-DSqbAlFE.js";import"./Dialog-CX5vmYnC.js";import"./cross-LcX80p3m.js";import"./svgIconContainer-JfwEPNa6.js";import"./useBaseUiId-CU_4DgXR.js";import"./InternalBackdrop-D42GbSkK.js";import"./composite-Ds40WlWo.js";import"./index-Yem3TUar.js";import"./index-BWrySZaR.js";import"./index-_KzJ1Rbr.js";import"./useEventCallback-DIy1mzZ8.js";import"./SkeletonBar-DWaiSj9c.js";import"./LoadingCell-CFvcFK4R.js";import"./ColumnConfigDialog-B4LF4x1T.js";import"./DraggableList-BZ-xJ4SQ.js";import"./search-CC-mClCy.js";import"./Input-Co-1aNP1.js";import"./useControlled-Dpm9HPQO.js";import"./Button-CUx6dso9.js";import"./small-cross-CLMNS1qh.js";import"./ActionButton-Bm6voTIO.js";import"./Checkbox-vSH54gMg.js";import"./useValueChanged-BxrzaDW-.js";import"./CollapsiblePanel-BvNzcq1u.js";import"./MultiColumnSortDialog-D6QFyCHS.js";import"./MenuTrigger-Dzcj5D89.js";import"./CompositeItem-BGzjXJQa.js";import"./ToolbarRootContext-D87nWH30.js";import"./getDisabledMountTransitionStyles-BUcNtKJv.js";import"./getPseudoElementBounds-r5PlTz71.js";import"./chevron-down-xdKSBTdG.js";import"./index-BpSvWq5I.js";import"./error-Dn6Wt_DI.js";import"./BaseCbacBanner-DiHyRB4h.js";import"./makeExternalStore-d8KP81yZ.js";import"./Tooltip-BJ5zYDuF.js";import"./PopoverPopup-HEf02Bcw.js";import"./debounce-BQ23lrxx.js";import"./useOsdkClient-x1g8_n4T.js";import"./tick-BwiRnB-U.js";import"./DropdownField-DHrmRAfm.js";import"./isEqual-irPOZyBy.js";import"./withOsdkMetrics-DFTVZPh6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
