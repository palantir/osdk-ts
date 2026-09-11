import{j as i}from"./iframe-DNRgqJZG.js";import{O as p}from"./object-table-B1zfwLTo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-K9kUQvmZ.js";import"./preload-helper-B4MzypZ7.js";import"./Table-DvySJjkE.js";import"./index--r_AATYa.js";import"./Dialog-BNjSvDg6.js";import"./cross-fnGpeSL_.js";import"./svgIconContainer-RGbg_3In.js";import"./useBaseUiId-k1HsK5LP.js";import"./InternalBackdrop-C6yPahMN.js";import"./composite-BhLw2OB1.js";import"./index-D50m2_yv.js";import"./index-Bb2PTGBq.js";import"./index-J6FCVwwh.js";import"./useEventCallback-DAfTLw81.js";import"./SkeletonBar-BdIO37It.js";import"./LoadingCell-QYznWNAb.js";import"./ColumnConfigDialog-7M7EMVoR.js";import"./DraggableList-HRlKPnGS.js";import"./search-2pDcyK1J.js";import"./Input-DaU9Iq4Y.js";import"./useControlled-B0UDo4VH.js";import"./Button-DrBYvyjr.js";import"./small-cross-BtT2butt.js";import"./ActionButton-Dmy_y5QF.js";import"./Checkbox-B5bGmpU-.js";import"./useValueChanged-D_w674cM.js";import"./CollapsiblePanel-BlCOPMVs.js";import"./MultiColumnSortDialog-COKmoD-h.js";import"./MenuTrigger-Dj5N9rlo.js";import"./CompositeItem-GzRDip0q.js";import"./ToolbarRootContext-DAyCAc-p.js";import"./getDisabledMountTransitionStyles-4L_cObYh.js";import"./getPseudoElementBounds-DyKgoU5n.js";import"./chevron-down-BGaiaEhj.js";import"./index-CsEQ4i91.js";import"./error-DII-yisC.js";import"./BaseCbacBanner-B4tV7sGj.js";import"./makeExternalStore-D4vVBx2o.js";import"./Tooltip-DHSrIuxD.js";import"./PopoverPopup-TzHKm3nq.js";import"./debounce-BA7m7sn4.js";import"./useOsdkClient-CgS_42xe.js";import"./tick-DfDE1bdF.js";import"./DropdownField-Cu20yd1p.js";import"./isEqual-D-Z5npp3.js";import"./withOsdkMetrics-B_v8QCh0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
