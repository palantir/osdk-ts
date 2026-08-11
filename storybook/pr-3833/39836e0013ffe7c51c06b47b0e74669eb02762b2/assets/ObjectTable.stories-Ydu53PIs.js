import{j as i}from"./iframe-D6wK3EAy.js";import{O as p}from"./object-table-CJQhu3fY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLj6fnG5.js";import"./preload-helper-9qW4f37k.js";import"./Table-CXBGIS3x.js";import"./index-C4Egst8D.js";import"./Dialog-Dc1TWSlc.js";import"./cross-DJsnF8CR.js";import"./svgIconContainer-BQ29Jrrk.js";import"./useBaseUiId-Cqe_H5Gd.js";import"./InternalBackdrop-BUrCYPsm.js";import"./composite-ITGjJkDr.js";import"./index-CaTU6vjS.js";import"./index-VMlmoRq8.js";import"./index-BT2pitud.js";import"./useEventCallback-BfW23crB.js";import"./SkeletonBar-MxpLFb1K.js";import"./LoadingCell-B2LwBLoU.js";import"./ColumnConfigDialog-DZyftQjy.js";import"./DraggableList-DLWlM7VL.js";import"./search-BHdUrAF7.js";import"./Input-D0ZybK8t.js";import"./useControlled-DDOEDrW8.js";import"./isEqual-CmvsVuZf.js";import"./isObject-BQBtOJHN.js";import"./Button-BOEdhvyt.js";import"./ActionButton-BI03wXnE.js";import"./Checkbox-CjPdw_-h.js";import"./useValueChanged-BeZW4Vsb.js";import"./CollapsiblePanel-KoDTkwo8.js";import"./MultiColumnSortDialog-COF8eH7m.js";import"./MenuTrigger-DxBIpn73.js";import"./CompositeItem-CBOlU4eU.js";import"./ToolbarRootContext-IVqSjG4F.js";import"./getDisabledMountTransitionStyles-BasdcLrs.js";import"./getPseudoElementBounds-CQdtBRvd.js";import"./chevron-down-CUkUYMVt.js";import"./index-B6SJHL1l.js";import"./error-CiM4_SXt.js";import"./BaseCbacBanner-BH0YKs-R.js";import"./makeExternalStore-CAK-_0fa.js";import"./Tooltip-xfJ6sV_6.js";import"./PopoverPopup-Bl3xjwYm.js";import"./toNumber-DK_dsH5n.js";import"./useOsdkClient-D-pULJwo.js";import"./tick-BaroVa_1.js";import"./DropdownField-DS2UrcHX.js";import"./withOsdkMetrics-n3V8zZwC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
