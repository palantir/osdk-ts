import{j as i}from"./iframe-D46iQmwz.js";import{O as p}from"./object-table-DxFWiXYn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuyVVzsz.js";import"./preload-helper-CD5q78pN.js";import"./Table-RgT9q70T.js";import"./index-aAuOiy4H.js";import"./Dialog-ButokuTd.js";import"./cross-DILS2Eyl.js";import"./svgIconContainer-B30Y3J7X.js";import"./useBaseUiId-CzYRzxTP.js";import"./InternalBackdrop-by-ceIbs.js";import"./composite-DKDexQnG.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./index-U-d4CKYD.js";import"./useEventCallback-V7mrEIFj.js";import"./SkeletonBar-CcQvDZ8T.js";import"./LoadingCell-Bxm1teQi.js";import"./ColumnConfigDialog-F2a0IOsV.js";import"./DraggableList-DgOkYP-g.js";import"./search-CTXiTDhB.js";import"./Input-Y05_-7l4.js";import"./useControlled-B0hedhV2.js";import"./Button-C713JtES.js";import"./small-cross-BSVqwTPi.js";import"./ActionButton-BYzYLETk.js";import"./Checkbox-CYI0w2Al.js";import"./useValueChanged-BMGjZ3vx.js";import"./CollapsiblePanel-Dtiip96Z.js";import"./MultiColumnSortDialog-Du8-c8-x.js";import"./MenuTrigger-DNh9DzA2.js";import"./CompositeItem-K2_1UaBE.js";import"./ToolbarRootContext-D_lRWVni.js";import"./getDisabledMountTransitionStyles-3PNri0U8.js";import"./getPseudoElementBounds-CjKg6Y1I.js";import"./chevron-down-CLNkT6er.js";import"./index-BcX9m2km.js";import"./error-C1HeeVQA.js";import"./BaseCbacBanner-DAJ3aiv3.js";import"./makeExternalStore-BRMHbBWy.js";import"./Tooltip-Co7-V-9X.js";import"./PopoverPopup-l6zrAa5D.js";import"./debounce-CZeVCb1Q.js";import"./useOsdkClient-DUJkV3uU.js";import"./tick-CSNy2-E-.js";import"./DropdownField-CVhHYQdg.js";import"./isEqual-CBpUdabS.js";import"./withOsdkMetrics-BBV3u7Lm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
