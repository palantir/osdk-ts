import{j as i}from"./iframe-DkzbgSAD.js";import{O as p}from"./object-table-DERUT3qL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_k8_2Lh.js";import"./preload-helper-BiwIe667.js";import"./Table-BjvAinYT.js";import"./index-DjIOOe4t.js";import"./Dialog-c7vLoh07.js";import"./cross-Cd4Ezf-o.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./useBaseUiId-CdNYBUR5.js";import"./InternalBackdrop-CaeoLXWh.js";import"./composite-CynzhD0V.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./index-MiufCKVv.js";import"./useEventCallback-Dvazelct.js";import"./SkeletonBar-DLuntpKM.js";import"./LoadingCell-CP8OE6bF.js";import"./ColumnConfigDialog-BMcEiYrr.js";import"./DraggableList-YeaSyVSn.js";import"./search-DVRH7Lct.js";import"./Input-CAjIPIjE.js";import"./useControlled-C8Dvxw0_.js";import"./Button-BHYsrTUy.js";import"./small-cross-D9-XIEQD.js";import"./ActionButton-CX4x4__7.js";import"./Checkbox-DZ1dvYsR.js";import"./useValueChanged-DbcB2lMI.js";import"./CollapsiblePanel-lk9wXXL6.js";import"./MultiColumnSortDialog-t_1c5JLL.js";import"./MenuTrigger-DVn985mJ.js";import"./CompositeItem-B0TjqzOk.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./getDisabledMountTransitionStyles-BKGL4WDU.js";import"./getPseudoElementBounds-CuBbtjn1.js";import"./chevron-down-D4koVRNt.js";import"./index-BSrr_0Jz.js";import"./error-CAfn1z7w.js";import"./BaseCbacBanner-DzF-LUX4.js";import"./makeExternalStore-CBYxH43f.js";import"./Tooltip-4k1X8Kbh.js";import"./PopoverPopup-jjunJ9hJ.js";import"./debounce-DuGr5rYC.js";import"./useOsdkClient-BN4CbGuS.js";import"./tick-BvW-N913.js";import"./DropdownField-mY-AIqk3.js";import"./isEqual-BiIWWaVa.js";import"./withOsdkMetrics-BhSP4CDN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
