import{j as i}from"./iframe-Tg2fnlVs.js";import{O as p}from"./object-table-s1e2Phdi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8HhBzGYs.js";import"./preload-helper-xsLVBww1.js";import"./Table-D4vOxokt.js";import"./index-B3-1mb1K.js";import"./Dialog-z10bt9ml.js";import"./cross-BZrYWs_D.js";import"./svgIconContainer-Cp1mUGc0.js";import"./useBaseUiId-D6sRq2bB.js";import"./InternalBackdrop-BsP43oYC.js";import"./composite-DuLfcYDh.js";import"./index-o5uplDD7.js";import"./index-DPwCU7gB.js";import"./index-FXCVzM8A.js";import"./useEventCallback-Clt5HhZy.js";import"./SkeletonBar-BzHuBvLf.js";import"./LoadingCell-C6Z17YL3.js";import"./ColumnConfigDialog-Ck5OsDxx.js";import"./DraggableList-2-y-jsVB.js";import"./search-UK-OniDD.js";import"./Input-BPgms8bD.js";import"./useControlled-Dvm87Fn4.js";import"./isEqual-NkSmJgkK.js";import"./isObject-DmJxbbx1.js";import"./Button-CiYzxyPU.js";import"./ActionButton-1QC1UJFs.js";import"./Checkbox-HpCj16gy.js";import"./useValueChanged-seYnRZ38.js";import"./CollapsiblePanel-BNpWQkWl.js";import"./MultiColumnSortDialog-D2ob9v7y.js";import"./MenuTrigger-Dw2XlIXx.js";import"./CompositeItem-DEGMDptb.js";import"./ToolbarRootContext-BUY7sygA.js";import"./getDisabledMountTransitionStyles-cA1h6ws6.js";import"./getPseudoElementBounds-B0T37kvs.js";import"./chevron-down-Bj_a4fCt.js";import"./index-CL7wapu_.js";import"./error-9Ml166dJ.js";import"./BaseCbacBanner-D21Fu5a7.js";import"./makeExternalStore-Y3iyej0D.js";import"./Tooltip-2VCDdGRa.js";import"./PopoverPopup-Dp0lEAyY.js";import"./toNumber-B00qaJHM.js";import"./useOsdkClient-C_cOGEWG.js";import"./tick-dG2WuFpQ.js";import"./DropdownField-CBRsuUdv.js";import"./withOsdkMetrics-DGs0YjPU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
