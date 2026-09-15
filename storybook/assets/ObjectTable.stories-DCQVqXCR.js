import{j as i}from"./iframe-BqmsmROC.js";import{O as p}from"./object-table-BmRPizOX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_MQxvyjO.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CgrDiYbC.js";import"./index-DE_4plrx.js";import"./Dialog-uksgf5Bf.js";import"./cross-DfmyAU8B.js";import"./svgIconContainer-DwHFgry-.js";import"./useBaseUiId-C8C4OFgB.js";import"./InternalBackdrop-Cy1aLXhF.js";import"./composite-CiV_UR9j.js";import"./index-DFyqPKTO.js";import"./index-CWE85mCR.js";import"./index-Bey-y-w6.js";import"./useEventCallback-fsvAZTzq.js";import"./SkeletonBar-CniGFXhP.js";import"./LoadingCell-rXQWvxCs.js";import"./ColumnConfigDialog-BBlD2g_8.js";import"./DraggableList-BEFUbznw.js";import"./search-BBGycv-1.js";import"./Input-C3AYJYVI.js";import"./useControlled-DXWlWATE.js";import"./Button-zbZf0J9i.js";import"./small-cross-Bk6bCekb.js";import"./ActionButton-Lq8BIY2Z.js";import"./Checkbox-CPgQg4fN.js";import"./useValueChanged-BkcQ3FBO.js";import"./CollapsiblePanel-VNdFnwVY.js";import"./MultiColumnSortDialog-BrcQy9AT.js";import"./MenuTrigger-DN14xV_t.js";import"./CompositeItem-C1DMYRuJ.js";import"./ToolbarRootContext--CuPwDjZ.js";import"./getDisabledMountTransitionStyles-yrOwfUkE.js";import"./getPseudoElementBounds-CbKhuRFY.js";import"./chevron-down-s5zpD1xF.js";import"./index-B0TE2znt.js";import"./error-DKXNqTp4.js";import"./BaseCbacBanner-N_ry9LS-.js";import"./makeExternalStore-jkqHHCtl.js";import"./Tooltip-DHQwjn4a.js";import"./PopoverPopup-k-Hpnjxy.js";import"./debounce-DL2qpSTk.js";import"./useOsdkClient-D-sadKnS.js";import"./tick-BOnCrQFY.js";import"./DropdownField-8ctGfF9y.js";import"./isEqual-Bzk8R1VE.js";import"./withOsdkMetrics-DVk1cW14.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
