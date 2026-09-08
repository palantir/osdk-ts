import{j as i}from"./iframe-CMaTw6X_.js";import{O as p}from"./object-table-CvS1PKqw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hC38tzGR.js";import"./preload-helper-YUCSvBRl.js";import"./Table-BdZxk-Ie.js";import"./index-DcwZFFHE.js";import"./Dialog-BtAm0E3z.js";import"./cross-BToySQSC.js";import"./svgIconContainer-DzaaatyJ.js";import"./useBaseUiId-BQVDaT2W.js";import"./InternalBackdrop-B4tVXPLL.js";import"./composite-CLM32H9h.js";import"./index-DrAoL5DS.js";import"./index-CokBQJMj.js";import"./index-i_JEJzIT.js";import"./useEventCallback-JAzPbeMV.js";import"./SkeletonBar-y-lFwvfk.js";import"./LoadingCell-DIjFy37G.js";import"./ColumnConfigDialog-dfkhJbJK.js";import"./DraggableList-D1PRcDgt.js";import"./search-DX2tWApA.js";import"./Input-C22UXl1f.js";import"./useControlled-BhIydEad.js";import"./Button-gCGWFRxS.js";import"./small-cross-D_VaN_YZ.js";import"./ActionButton-j6Ig36dP.js";import"./Checkbox-BSSG_spo.js";import"./useValueChanged-DC6zsyd6.js";import"./CollapsiblePanel-zt3byeQH.js";import"./MultiColumnSortDialog-ju9Ri7Y7.js";import"./MenuTrigger-Cha642qv.js";import"./CompositeItem-BOjJ-dS3.js";import"./ToolbarRootContext-0tvyCtzm.js";import"./getDisabledMountTransitionStyles-21zR2DnY.js";import"./getPseudoElementBounds-t54joTAf.js";import"./chevron-down-CiliQGq8.js";import"./index-FMHsbTbl.js";import"./error-QpkULiAa.js";import"./BaseCbacBanner-CdnmMMv_.js";import"./makeExternalStore-daS2Qovb.js";import"./Tooltip-B5T5Xpkt.js";import"./PopoverPopup-_o2oNRLE.js";import"./debounce-CcQQoCkT.js";import"./useOsdkClient-BWocAVB-.js";import"./tick-D-4tdeUZ.js";import"./DropdownField-C8LlY8gH.js";import"./isEqual-HbZTEvno.js";import"./withOsdkMetrics-06-Hb-DT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
