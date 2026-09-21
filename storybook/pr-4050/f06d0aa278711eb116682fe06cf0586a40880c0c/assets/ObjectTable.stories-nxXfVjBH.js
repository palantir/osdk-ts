import{j as i}from"./iframe-CFV-nnj8.js";import{O as p}from"./object-table-CtxjKN9T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjiBZLdz.js";import"./preload-helper-B6fyfr7c.js";import"./Table-BiYiUmOh.js";import"./index-vmaSH1sB.js";import"./Dialog-m9518HMg.js";import"./cross-QMVU-YJc.js";import"./svgIconContainer-D_-2ttXX.js";import"./useBaseUiId-WVaYu2-M.js";import"./InternalBackdrop-Dexmpq_6.js";import"./composite-DJp6IOoD.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./index-BFvHZIyN.js";import"./useEventCallback-M1vMQgZ7.js";import"./SkeletonBar-x6A5LKdf.js";import"./LoadingCell-vaVMC9Zh.js";import"./ColumnConfigDialog-CNQb7nr0.js";import"./DraggableList-gITP3HIV.js";import"./search-DZmS-pfQ.js";import"./Input-KbJwk9Nd.js";import"./useControlled-BOSfLjyK.js";import"./Button-B3yPaUxl.js";import"./small-cross-B17ASmwu.js";import"./ActionButton-DNioPXe_.js";import"./Checkbox-QDGReIJr.js";import"./useValueChanged-DWC6YrTv.js";import"./CollapsiblePanel-TbSN7Ilj.js";import"./MultiColumnSortDialog-J02hCAYj.js";import"./MenuTrigger-B2SznUJx.js";import"./CompositeItem-C3ap8dp1.js";import"./ToolbarRootContext-BsgEetLb.js";import"./getDisabledMountTransitionStyles-DE-GPIVs.js";import"./getPseudoElementBounds-g83biV_s.js";import"./chevron-down-14_leR3A.js";import"./index-DsD3GjJA.js";import"./error-CPA32RNg.js";import"./BaseCbacBanner-DUJz5Dl3.js";import"./makeExternalStore-BLm3eYi3.js";import"./Tooltip-DZQrwu44.js";import"./PopoverPopup-93SM5qMU.js";import"./debounce-DDlfQ6-b.js";import"./useOsdkClient-X9M28KVd.js";import"./tick-DCGGFRpD.js";import"./DropdownField-CFseBlqH.js";import"./isEqual-TFc4XBg9.js";import"./withOsdkMetrics-cGR_rgDD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
