import{j as i}from"./iframe-BJHQLm8B.js";import{O as p}from"./object-table-6Dmunot4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-UtgZpp.js";import"./preload-helper-DNJi6hnI.js";import"./Table-0Gb2iOhx.js";import"./index-BUqmovkS.js";import"./Dialog-QIwxmnv_.js";import"./cross-DyhJ0eVv.js";import"./svgIconContainer-CExwBPXa.js";import"./useBaseUiId-DFBTpUkK.js";import"./InternalBackdrop-Ddz1w5Zi.js";import"./composite-BjkOmkjK.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./index-nUnNg1dx.js";import"./useEventCallback-Dk3ZagH_.js";import"./SkeletonBar-BE2-lLRV.js";import"./LoadingCell-Dno7k0KU.js";import"./ColumnConfigDialog-dI9pN7C5.js";import"./DraggableList-CXkhvPtt.js";import"./search-CBF8qcQD.js";import"./Input--rxzAq78.js";import"./useControlled-91vTGa_9.js";import"./Button-hiBWk-nL.js";import"./small-cross-BaIKTF8-.js";import"./ActionButton-B06o1rGg.js";import"./Checkbox-DDOXzphd.js";import"./useValueChanged-Cznn-vr_.js";import"./CollapsiblePanel-BzpOhWpv.js";import"./MultiColumnSortDialog-jT1EKfyH.js";import"./MenuTrigger-74Ao9CwB.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./getDisabledMountTransitionStyles-CygFqHiI.js";import"./getPseudoElementBounds-CLRJGPDW.js";import"./chevron-down-DOmpjpbt.js";import"./index-mWeNCZ3t.js";import"./error-msvagv_9.js";import"./BaseCbacBanner-DMhFZWt0.js";import"./makeExternalStore-CZ09MAHK.js";import"./Tooltip-DzCNOI3d.js";import"./PopoverPopup-VghyVGFq.js";import"./debounce-DLKN_1JY.js";import"./useOsdkClient-DHzp8GFD.js";import"./tick-pYb3XQje.js";import"./DropdownField-BmtwaVlS.js";import"./isEqual-BlhDqGkk.js";import"./withOsdkMetrics-CQ4A9sKP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
