import{j as i}from"./iframe-BdOqqohK.js";import{O as p}from"./object-table-wRfqkctG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DawSpRK-.js";import"./preload-helper-BM9HCPK9.js";import"./Table-BtgtF-3W.js";import"./index-CMkPjfDh.js";import"./Dialog-Cge2Djl4.js";import"./cross-CBN09daJ.js";import"./svgIconContainer-CxQ350M_.js";import"./useBaseUiId-D2aQCoEc.js";import"./InternalBackdrop-D-cRM3dE.js";import"./composite-DBxA_VE8.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./index-DChtCzTr.js";import"./useEventCallback-Kc4Bg8wO.js";import"./SkeletonBar-u4XVZQ3v.js";import"./LoadingCell-hpDbvg2p.js";import"./ColumnConfigDialog-T3sSbJ1i.js";import"./DraggableList-DrRgyrTr.js";import"./search-et-5mZuo.js";import"./Input-BunEo4l4.js";import"./useControlled-BYgnBDE7.js";import"./Button-KdAdTzHS.js";import"./small-cross-BL7aJl_O.js";import"./ActionButton-DMvFJ_VM.js";import"./Checkbox-dzgioJMo.js";import"./useValueChanged-BdYiKPuI.js";import"./CollapsiblePanel-Bb165C_-.js";import"./MultiColumnSortDialog-Dm4JsThE.js";import"./MenuTrigger-DFKWibUL.js";import"./CompositeItem-FJMzn3o4.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./getDisabledMountTransitionStyles-BJoEqB65.js";import"./getPseudoElementBounds-lBQa4hkk.js";import"./chevron-down-DcdLMAVH.js";import"./index-CZ8krK_n.js";import"./error-BfW0iVfX.js";import"./BaseCbacBanner-CxYClwUP.js";import"./makeExternalStore-Cfk45-cb.js";import"./Tooltip-CVkVqWlj.js";import"./PopoverPopup-BHGNAE2t.js";import"./debounce-BNI_uAPu.js";import"./useOsdkClient-12OQM3Gl.js";import"./tick-C7mROKoo.js";import"./DropdownField-B4Q1L6C2.js";import"./isEqual-BHow4tcx.js";import"./withOsdkMetrics-ADnSdXzg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
