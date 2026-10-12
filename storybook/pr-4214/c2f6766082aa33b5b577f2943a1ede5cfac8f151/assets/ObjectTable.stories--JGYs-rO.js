import{j as i}from"./iframe-CgKUzItX.js";import{O as p}from"./object-table--UhP6wBB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dr4dZ2Xn.js";import"./preload-helper-C8NMj1_t.js";import"./Table-Dd1TltZl.js";import"./index-BGyRLoto.js";import"./Dialog-25Mkgz6y.js";import"./cross-BCuSuLMn.js";import"./svgIconContainer-3Z9BBN_f.js";import"./useBaseUiId-9QwtdzIz.js";import"./InternalBackdrop-Bg0vXpRx.js";import"./composite-C8pbzlSR.js";import"./index-DH7xuiv5.js";import"./index-DPbjuSTY.js";import"./index-BGmAK-zp.js";import"./useEventCallback-C9jSHP4H.js";import"./SkeletonBar-CBQXt1TI.js";import"./LoadingCell-D0L-fZQO.js";import"./ColumnConfigDialog-zvTp2IU4.js";import"./DraggableList-BmHxYwR-.js";import"./search-d4lpn-YX.js";import"./Input-YdwMEp0H.js";import"./useControlled-ywgC3TRl.js";import"./Button-vrPbejrg.js";import"./small-cross-B30TyiPZ.js";import"./ActionButton-BcgXFlaR.js";import"./Checkbox-acHCpw7a.js";import"./useValueChanged-DRRio9Te.js";import"./CollapsiblePanel-DVt2UmWD.js";import"./MultiColumnSortDialog-kMPo0868.js";import"./MenuTrigger-a4Fa52-F.js";import"./CompositeItem-BImsaWuE.js";import"./ToolbarRootContext-Cn9ARR1m.js";import"./getDisabledMountTransitionStyles-CMVjInPg.js";import"./getPseudoElementBounds-DrvvxQqn.js";import"./chevron-down-CUAqfL81.js";import"./index-8XKQJxIW.js";import"./error-CPGG1yPH.js";import"./BaseCbacBanner-Re9lp9Kj.js";import"./makeExternalStore-CkIkERDP.js";import"./Tooltip-C8G96OiC.js";import"./PopoverPopup-CPzBvckh.js";import"./debounce-BzubZrnK.js";import"./useOsdkClient-D6NF6aDi.js";import"./tick-D2qeh1kK.js";import"./DropdownField-T4Xd-ty_.js";import"./isEqual-CZoe1OIr.js";import"./withOsdkMetrics-BCBab3ni.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
