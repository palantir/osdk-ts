import{j as i}from"./iframe-i3f0VK7P.js";import{O as p}from"./object-table-S96oFubf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nONV9-h3.js";import"./preload-helper-CcQVXdAf.js";import"./Table-B3ADbA9t.js";import"./index-BSc8nCuA.js";import"./Dialog-gnB7Dkbr.js";import"./cross-U10SUwzd.js";import"./svgIconContainer-DpWasIbE.js";import"./useBaseUiId-3GNAAiBc.js";import"./InternalBackdrop-BzlNDOWb.js";import"./composite-GZoC5isN.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./index-Dc_noU35.js";import"./useEventCallback-DEIVd39z.js";import"./SkeletonBar-DWNug-bk.js";import"./LoadingCell-CNgihZGh.js";import"./ColumnConfigDialog-0WMzoY99.js";import"./DraggableList-Dt6iazGC.js";import"./search-D1ajCeBe.js";import"./Input-BKCzKS6Z.js";import"./useControlled-BBd9b3hp.js";import"./Button-CM2JbGjZ.js";import"./small-cross-CaOVzuNS.js";import"./ActionButton-DHom0mZn.js";import"./Checkbox-_WMWLqhH.js";import"./useValueChanged-DQRztGVN.js";import"./CollapsiblePanel-D0rBf_Yr.js";import"./MultiColumnSortDialog-DGJSRujv.js";import"./MenuTrigger-owKOYRF_.js";import"./CompositeItem-C5NIgZsO.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./getDisabledMountTransitionStyles-DlreV-Ph.js";import"./getPseudoElementBounds-BbqFlpXE.js";import"./chevron-down-BEmwBzIe.js";import"./index-B9C8GZw0.js";import"./error-Cm9VDJHx.js";import"./BaseCbacBanner-D_O2oYx8.js";import"./makeExternalStore-Ds3owEGg.js";import"./Tooltip--UELeF3n.js";import"./PopoverPopup-BilHat69.js";import"./debounce-CZjDoEnf.js";import"./useOsdkClient-eQiRfwbd.js";import"./tick-BdzI4Lm6.js";import"./DropdownField-CfwMrpRo.js";import"./isEqual-DUgfKGPN.js";import"./withOsdkMetrics-xRq5i0OL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
