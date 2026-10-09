import{j as i}from"./iframe-DkUlyVAk.js";import{O as p}from"./object-table-wcCDtGcD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNTewfKg.js";import"./preload-helper-Do3rx7tx.js";import"./Table-BuAXuDdk.js";import"./index-BKCxouDT.js";import"./Dialog-t8PP7gAK.js";import"./cross-NxNK5LVM.js";import"./svgIconContainer-DXdte7hC.js";import"./useBaseUiId-Ct2lb7hy.js";import"./InternalBackdrop-JtvBqmbW.js";import"./composite-DFkzp6xD.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./index-BHWhvKcH.js";import"./useEventCallback-Bfg-1dtD.js";import"./SkeletonBar-DrTF8jwx.js";import"./LoadingCell-CzBDsbnw.js";import"./ColumnConfigDialog-DzLhLwGL.js";import"./DraggableList-Zj2AdCb7.js";import"./search-BtZqzqFW.js";import"./Input-DEfnyfO2.js";import"./useControlled-DQwmvUO6.js";import"./Button-YTCf-lQa.js";import"./small-cross-CBmGUiw6.js";import"./ActionButton-CGCXefcq.js";import"./Checkbox-D-KL8GQC.js";import"./useValueChanged-Bwz98CW8.js";import"./CollapsiblePanel-CWIE3b7e.js";import"./MultiColumnSortDialog-CelZgdCc.js";import"./MenuTrigger-D-7KzGK2.js";import"./CompositeItem-C6x4Plfg.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./getDisabledMountTransitionStyles-D2mnHFL5.js";import"./getPseudoElementBounds-DgjJtdNO.js";import"./chevron-down-C8H-X29U.js";import"./index-2N4Mch0O.js";import"./error-Cxkq3yoq.js";import"./BaseCbacBanner-CvVoV4NY.js";import"./makeExternalStore-CrMBheh9.js";import"./Tooltip-BZdoNmX1.js";import"./PopoverPopup-CjNS0jhO.js";import"./debounce-BrUJ1qZS.js";import"./useOsdkClient-DcaeD6xA.js";import"./tick-xV8dN8GT.js";import"./DropdownField-Bqc5sgH5.js";import"./isEqual-uuZQYH9j.js";import"./withOsdkMetrics-_-mYkqh_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
