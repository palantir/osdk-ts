import{j as i}from"./iframe-CWg4NKfU.js";import{O as p}from"./object-table-CUaJVOeo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCgOI7bL.js";import"./preload-helper-CbUGxpFK.js";import"./Table-DGz9J2_I.js";import"./index-BqvDfMBr.js";import"./Dialog-C5eQeW5b.js";import"./cross-C4B5H0O1.js";import"./svgIconContainer-CfhV0gWc.js";import"./useBaseUiId-DspZ6BgH.js";import"./InternalBackdrop-DmUAlLlN.js";import"./composite-BZR9RT0J.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./index-Du_LEjCQ.js";import"./useEventCallback-DypMXnSj.js";import"./SkeletonBar-CQQLBMCI.js";import"./LoadingCell-C225-QxH.js";import"./ColumnConfigDialog-DSdc2ZQ0.js";import"./DraggableList-B4wpIJV9.js";import"./search-Csa8UJRl.js";import"./Input-CkLJO43y.js";import"./useControlled-CxeE38RI.js";import"./Button-BMAG39_Z.js";import"./small-cross-BOD3G0f7.js";import"./ActionButton-B764oDl2.js";import"./Checkbox-DHMyW384.js";import"./useValueChanged-BTUZT3Bs.js";import"./CollapsiblePanel-BTrc7yy9.js";import"./MultiColumnSortDialog-Dx3bgxMC.js";import"./MenuTrigger-CxYsElt9.js";import"./CompositeItem-B-7NNP1P.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./getDisabledMountTransitionStyles-CEpea57p.js";import"./getPseudoElementBounds-gNG5aSRj.js";import"./chevron-down-GiI9wTRT.js";import"./index-BRlDD1gT.js";import"./error-DpR2m3gK.js";import"./BaseCbacBanner-Bqfi7D06.js";import"./makeExternalStore-PjLZ2rt4.js";import"./Tooltip-Dc8Bmckm.js";import"./PopoverPopup-DhNWwJ6-.js";import"./debounce-gYlsUq6V.js";import"./useOsdkClient-DkhSPEoO.js";import"./tick-CXe62fkm.js";import"./DropdownField-D5fuGTjd.js";import"./isEqual-Baxfuxdj.js";import"./withOsdkMetrics-Cl-t5p_W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
