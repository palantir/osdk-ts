import{j as i}from"./iframe-YPYsIb22.js";import{O as p}from"./object-table-CtbV_lm5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LmUbciDQ.js";import"./preload-helper-Bm267i2E.js";import"./Table-DRkKPyHa.js";import"./index-tbAq8Ohd.js";import"./Dialog-KKxMQUvZ.js";import"./cross-Bvh9g_GQ.js";import"./svgIconContainer-DjM3XCjt.js";import"./useBaseUiId-DcZVCxGy.js";import"./InternalBackdrop-CdruCL_T.js";import"./composite-DzJGJJnK.js";import"./index-Cg0mmqLz.js";import"./index-DBWmIQLG.js";import"./index-DwCIcKt5.js";import"./useEventCallback-B9OthbKU.js";import"./SkeletonBar-WJg75WZq.js";import"./LoadingCell-zWDjiQ5u.js";import"./ColumnConfigDialog-8A-B2Bod.js";import"./DraggableList-C2O4QV4a.js";import"./search-Cmuvm24Z.js";import"./Input-C7Rttt_L.js";import"./useControlled-CSFowk_7.js";import"./isEqual-s1bPN8Kr.js";import"./isObject-CYfcTCzm.js";import"./Button-BIBGF6Kj.js";import"./ActionButton-BpXqO9zC.js";import"./Checkbox-D6GbL2Cv.js";import"./useValueChanged-91bWric7.js";import"./CollapsiblePanel-DmGeo7Hg.js";import"./MultiColumnSortDialog-DcJA4KJc.js";import"./MenuTrigger-ornS5oyF.js";import"./CompositeItem-guz_X3dC.js";import"./ToolbarRootContext-BbwNnKOF.js";import"./getDisabledMountTransitionStyles-JY1Za2dw.js";import"./getPseudoElementBounds-xEkpdBae.js";import"./chevron-down-DA0ta6Kf.js";import"./index-rKVmsUIV.js";import"./error-C5wdbzy2.js";import"./BaseCbacBanner-5IT3qCUT.js";import"./makeExternalStore-6VAz4fOk.js";import"./Tooltip-CLhzcRJW.js";import"./PopoverPopup-D-OFQvOK.js";import"./toNumber-CJU3h-Bh.js";import"./useOsdkClient-BBWJ8V-r.js";import"./tick-D0TmV92Y.js";import"./DropdownField-ChvYS7Am.js";import"./withOsdkMetrics-B5RDuhJT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
