import{j as i}from"./iframe-6Uhngy72.js";import{O as p}from"./object-table-C6Uj0Pkf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAX1741h.js";import"./preload-helper-BuO-Wqte.js";import"./Table-CWOOYgqj.js";import"./index-D6AVV8eE.js";import"./Dialog-Cp_zujfc.js";import"./cross-BcSy3qdU.js";import"./svgIconContainer-UGK0c4xl.js";import"./useBaseUiId-BRxptNv-.js";import"./InternalBackdrop-B6plQtwS.js";import"./composite-DJDJ56jv.js";import"./index-LZISWei8.js";import"./index-QHeoXjyH.js";import"./index-DUcYp8wh.js";import"./useEventCallback-55Jmx4oa.js";import"./SkeletonBar-DWJUdzHJ.js";import"./LoadingCell-C-pV1fqW.js";import"./ColumnConfigDialog-DTcG2XGs.js";import"./DraggableList-DCtihdtv.js";import"./search-BdfvUgnd.js";import"./Input-CofwDVZ0.js";import"./useControlled-DIt55qQJ.js";import"./Button-DCQ8ovOH.js";import"./small-cross-C_sErh76.js";import"./ActionButton-Bx3EdeP6.js";import"./Checkbox-B83JJ3kM.js";import"./useValueChanged-BiRQuPMj.js";import"./CollapsiblePanel-DYVVCbmI.js";import"./MultiColumnSortDialog-BsOrp9Qv.js";import"./MenuTrigger-BvyCd2a-.js";import"./CompositeItem-DLH8bcOo.js";import"./ToolbarRootContext-fpBVACf_.js";import"./getDisabledMountTransitionStyles-VHaa4rjf.js";import"./getPseudoElementBounds-vA5019Qs.js";import"./chevron-down-BwrGawkK.js";import"./index-CsXiYC9Y.js";import"./error-CxRJmZZd.js";import"./BaseCbacBanner-D6VOHJWP.js";import"./makeExternalStore-BQsPVGuf.js";import"./Tooltip-BUoyDTBb.js";import"./PopoverPopup-3cB-7Tot.js";import"./debounce-DVmaMtUt.js";import"./useOsdkClient-TrnbRu4h.js";import"./tick-BL3gPeuy.js";import"./DropdownField-DobyXSx1.js";import"./isEqual-BPJoJQWG.js";import"./withOsdkMetrics-Ca-0BTyV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
