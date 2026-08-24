import{j as i}from"./iframe-ZcCW6_Wz.js";import{O as p}from"./object-table-DSC3APB0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-iz0ijv0X.js";import"./preload-helper-BB_y-aog.js";import"./Table-bPyT45_u.js";import"./index-DyeMh41W.js";import"./Dialog-Bk-FWIZW.js";import"./cross-wMIvDcbp.js";import"./svgIconContainer-0fT5nrJe.js";import"./useBaseUiId-BpaZn96w.js";import"./InternalBackdrop-CY-OiTbx.js";import"./composite-foIRj0KC.js";import"./index-CBeU0MC7.js";import"./index-T8wYhAz8.js";import"./index-DlkuYEj_.js";import"./useEventCallback-D4DJY73l.js";import"./SkeletonBar-Cg2dgNGY.js";import"./LoadingCell-B5SIM5LH.js";import"./ColumnConfigDialog-UzbFEaKV.js";import"./DraggableList-BadaIhe-.js";import"./search-Bc3gx_gy.js";import"./Input-Dpme7joy.js";import"./useControlled-DiaTlfr8.js";import"./Button-Cm8wb-cw.js";import"./small-cross-BbnAuCAy.js";import"./ActionButton-ElN4wuMZ.js";import"./Checkbox-Bk41vIIz.js";import"./useValueChanged-CuPWfF1v.js";import"./CollapsiblePanel-DMPMYfth.js";import"./MultiColumnSortDialog-CuBwNQkn.js";import"./MenuTrigger-iAuxsFAd.js";import"./CompositeItem-B_VWcRPv.js";import"./ToolbarRootContext-BqQcS-8Q.js";import"./getDisabledMountTransitionStyles-BCKcQTMv.js";import"./getPseudoElementBounds-DDkxky54.js";import"./chevron-down-BAQtbrwT.js";import"./index-BJaF-zGC.js";import"./error-DOcHLiil.js";import"./BaseCbacBanner-CQrvMZnF.js";import"./makeExternalStore-BySX7A9V.js";import"./Tooltip-1LklJdbb.js";import"./PopoverPopup-DFELR-u8.js";import"./debounce-CXdCzSka.js";import"./useOsdkClient-CchBrSdw.js";import"./tick-BVQ9cMuo.js";import"./DropdownField-DXdhalb8.js";import"./isEqual-BsjTcvbt.js";import"./withOsdkMetrics-C-7rZzkE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
