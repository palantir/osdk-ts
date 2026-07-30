import{j as i}from"./iframe-DW5kExRz.js";import{O as p}from"./object-table-SK85HUFE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B90rbrUQ.js";import"./preload-helper-BnxWtWaG.js";import"./Table-2wiIUKM9.js";import"./index-CflAnjSB.js";import"./Dialog-B342EL_s.js";import"./cross-BXaETxpe.js";import"./svgIconContainer-dsPCmsB5.js";import"./useBaseUiId-CmNJn8Jo.js";import"./InternalBackdrop-BcvQGME1.js";import"./composite-BLexdKxo.js";import"./index-DH8-sclq.js";import"./index-Cf8c--ed.js";import"./index-7GZUwAeQ.js";import"./useEventCallback-BkGasbAR.js";import"./SkeletonBar-DeBe8Oqc.js";import"./LoadingCell-C_nW1YUY.js";import"./ColumnConfigDialog-RyYmBq-t.js";import"./DraggableList-BPMLG9CE.js";import"./search-BHsGOBSH.js";import"./Input-BFC96i5B.js";import"./useControlled-dYbeX3BT.js";import"./isEqual-CZ7L-i0h.js";import"./isObject-DHnfbCQR.js";import"./Button-D0EqJKRJ.js";import"./ActionButton-2GzyxNc0.js";import"./Checkbox-MhiyCNth.js";import"./useValueChanged-Db94IZxe.js";import"./CollapsiblePanel-GCGdmqV9.js";import"./MultiColumnSortDialog-CUN72OLB.js";import"./MenuTrigger-Bi_nQ-5H.js";import"./CompositeItem-CQlwhU_S.js";import"./ToolbarRootContext-BwqzssRh.js";import"./getDisabledMountTransitionStyles-DCRJEQNW.js";import"./getPseudoElementBounds-CSZF85ks.js";import"./chevron-down-D4OFZDT7.js";import"./index-Dy-i2J-X.js";import"./error-TNuapbIk.js";import"./BaseCbacBanner-CenzC8Iv.js";import"./makeExternalStore-D3UQvTf-.js";import"./Tooltip-DXsnCRfp.js";import"./PopoverPopup-CYRcWuYi.js";import"./toNumber-0-52reWh.js";import"./useOsdkClient-AsBqnP3o.js";import"./tick-C30IwoCd.js";import"./DropdownField-D1vWjaUE.js";import"./withOsdkMetrics-CBpR0MwW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
