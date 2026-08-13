import{j as i}from"./iframe-B6SlknkT.js";import{O as p}from"./object-table-BjD-a2rM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbsWTRYk.js";import"./preload-helper-CiWAtvVo.js";import"./Table-D1uGyHuL.js";import"./index-Cisl_9Mo.js";import"./Dialog-Dht4GjUV.js";import"./cross-K0XOfymX.js";import"./svgIconContainer-DvLmNigv.js";import"./useBaseUiId-DtAmNbh5.js";import"./InternalBackdrop-Dl30yC1C.js";import"./composite-P-ykFSG-.js";import"./index-BBz1sS-n.js";import"./index-BMjONJHt.js";import"./index-DmFxeViZ.js";import"./useEventCallback-NaQY75BS.js";import"./SkeletonBar-Clgo9cjH.js";import"./LoadingCell-CKZuBc9l.js";import"./ColumnConfigDialog-CehpGE9s.js";import"./DraggableList-CwYB9JVt.js";import"./search-xv1rsfPw.js";import"./Input-CXXJHcyj.js";import"./useControlled-PYuq7DgD.js";import"./isEqual-DBNTDdfj.js";import"./isObject-BLnKbGOO.js";import"./Button-F8n7DYb6.js";import"./ActionButton-BodQova9.js";import"./Checkbox-BNp5VU1x.js";import"./useValueChanged-CkgIT0Kx.js";import"./CollapsiblePanel-OFVSuctg.js";import"./MultiColumnSortDialog-CSgNB2hu.js";import"./MenuTrigger-DyWGdBhT.js";import"./CompositeItem-TSZ5fJAo.js";import"./ToolbarRootContext-2IHK8Ctj.js";import"./getDisabledMountTransitionStyles-ZwLnaqle.js";import"./getPseudoElementBounds-Cm2_1p_1.js";import"./chevron-down-DxJyaq1h.js";import"./index-WO9aHBrQ.js";import"./error-Bv29R1uB.js";import"./BaseCbacBanner-DUtQdQpu.js";import"./makeExternalStore-JliLFxhM.js";import"./Tooltip-BlcQGzNj.js";import"./PopoverPopup-Kq1sgNl6.js";import"./toNumber-CjsjmZPP.js";import"./useOsdkClient-6tgWcBTt.js";import"./tick-_Aaq9I8S.js";import"./DropdownField-BUVA7rQ6.js";import"./withOsdkMetrics-YbnoeFLv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
