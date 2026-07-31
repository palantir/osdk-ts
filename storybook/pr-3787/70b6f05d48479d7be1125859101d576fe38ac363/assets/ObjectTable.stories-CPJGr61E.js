import{j as i}from"./iframe-BCELjueD.js";import{O as p}from"./object-table-DMWVrhnd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-uy7bkh5m.js";import"./preload-helper-DhWtn3bd.js";import"./Table-h2VOON-p.js";import"./index-C2TWSJNn.js";import"./Dialog-Kr_5kPqy.js";import"./cross-DW9P7-kS.js";import"./svgIconContainer-D7r98AQf.js";import"./useBaseUiId-D2ilU-eW.js";import"./InternalBackdrop-DPTCUhCM.js";import"./composite-CFY-6VGT.js";import"./index-Co75qXW3.js";import"./index-BlGT_yiJ.js";import"./index-wUO7vjRD.js";import"./useEventCallback-BMAoa6Kg.js";import"./SkeletonBar-WkRd0IJo.js";import"./LoadingCell-CifpqLIM.js";import"./ColumnConfigDialog-DVHDV22f.js";import"./DraggableList-D1Gl-i5A.js";import"./search-Dw0OYTHR.js";import"./Input-B-GyiHFv.js";import"./useControlled-B6AglnsA.js";import"./isEqual-D6qOE7p_.js";import"./isObject-TZ77QRHx.js";import"./Button-DU1F4Snx.js";import"./ActionButton-Dqt-OOcW.js";import"./Checkbox-BYJtT0-D.js";import"./useValueChanged-D9Uj0vyL.js";import"./CollapsiblePanel-CAQsd2_r.js";import"./MultiColumnSortDialog-DXXa-HpH.js";import"./MenuTrigger-CGENzWRQ.js";import"./CompositeItem-qaPcSWJy.js";import"./ToolbarRootContext-C2W--ksY.js";import"./getDisabledMountTransitionStyles-nPzqkM6Q.js";import"./getPseudoElementBounds-CmuVA6fm.js";import"./chevron-down-QNpM5_Fh.js";import"./index-DrjK6CU8.js";import"./error-BslijzYM.js";import"./BaseCbacBanner-brOXDsBd.js";import"./makeExternalStore-BcTaJpz8.js";import"./Tooltip--BjEjPFB.js";import"./PopoverPopup-BFC5dokD.js";import"./toNumber-uWSCtnJ6.js";import"./useOsdkClient-CdRIrwcN.js";import"./tick-CAbm98cs.js";import"./DropdownField-ClPabGQC.js";import"./withOsdkMetrics-CLAhbfws.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
