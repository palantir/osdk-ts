import{j as i}from"./iframe-B4fcYJiT.js";import{O as p}from"./object-table-wmuurdSj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlJuVZcJ.js";import"./preload-helper-5Xw9mBMZ.js";import"./Table-BjoSwt71.js";import"./index-vOfuVkgp.js";import"./Dialog-BuJv0oan.js";import"./cross-C_JdOVLy.js";import"./svgIconContainer-DPEA_BLS.js";import"./useBaseUiId-B6WbWpXC.js";import"./InternalBackdrop-htLWR8L5.js";import"./composite-B-tdErfc.js";import"./index-Bt4bJlhP.js";import"./index-CJQLe4j-.js";import"./index-BdBvEu1G.js";import"./useEventCallback-By0kDg3B.js";import"./SkeletonBar-AjIVRhjA.js";import"./LoadingCell-DsaPLpod.js";import"./ColumnConfigDialog-jQja5evH.js";import"./DraggableList-Dnmu7Nmy.js";import"./search-CIBP2gcU.js";import"./Input-DZvTEW1z.js";import"./useControlled-DX4yqe1s.js";import"./isEqual-gV3mdmfB.js";import"./isObject-DxsoYVwo.js";import"./Button-D_oMeqth.js";import"./ActionButton-DhWSTHtc.js";import"./Checkbox-nqjfnWv-.js";import"./useValueChanged-B7hRFktE.js";import"./CollapsiblePanel-80O_QsdD.js";import"./MultiColumnSortDialog-C8QjInzL.js";import"./MenuTrigger-CJ8cgNtT.js";import"./CompositeItem-pQ2K7xcn.js";import"./ToolbarRootContext-y8R4SKxQ.js";import"./getDisabledMountTransitionStyles-B03Bv83z.js";import"./getPseudoElementBounds-CDskDbCj.js";import"./chevron-down-D4_4ihME.js";import"./index-Rk3z2JLL.js";import"./error-BdWXxwFt.js";import"./BaseCbacBanner-D61PQQ1U.js";import"./makeExternalStore-DVTzYonn.js";import"./Tooltip-BTrbcxkb.js";import"./PopoverPopup-xSMzY-FR.js";import"./toNumber-Dh2Swo2H.js";import"./useOsdkClient-CLoYggTB.js";import"./tick-C633aTdz.js";import"./DropdownField-C5BZ1RDL.js";import"./withOsdkMetrics-BoWW8iWH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
